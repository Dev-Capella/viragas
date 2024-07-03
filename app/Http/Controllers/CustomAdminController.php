<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\User;
use App\Product;
use App\ProductCategory;
use App\InfoProduct;

class CustomAdminController extends Controller
{
    public function createSlug($title) {
        // Tüm karakterleri küçük harfe çevir
        $slug = strtolower($title);
        
        // Türkçe karakterleri İngilizce karşılıklarıyla değiştir
        $slug = str_replace(
            ['ı', 'ğ', 'ü', 'ş', 'ö', 'ç', 'İ', 'Ğ', 'Ü', 'Ş', 'Ö', 'Ç'],
            ['i', 'g', 'u', 's', 'o', 'c', 'i', 'g', 'u', 's', 'o', 'c'],
            $slug
        );
        
        // Özel karakterleri kaldır
        $slug = preg_replace('/[^a-z0-9-]/', ' ', $slug);
        
        // Boşlukları tire ile değiştir
        $slug = preg_replace('/\s+/', '-', $slug);
        
        // Başlangıç ve bitişteki tireleri kaldır
        $slug = trim($slug, '-');
        
        return $slug;
    }
    public function index()
    {
        $products = Product::all();
        $productCategories = ProductCategory::get();
        return view('admin.custom-page', compact('products'));
    }

    public function create()
    {      $productCategories = ProductCategory::get();
        return view('admin.create-product',compact('productCategories'));
    }
   
    public function edit($id)
    {
        $product = Product::with('details')->findOrFail($id);
        $productCategories = ProductCategory::get();
        return view('admin.edit-product', compact('product','productCategories'));
    }

   

    public function update(Request $request, $id)
    {
        // 1. Ürünü bul
        $product = Product::findOrFail($id);
    
        // 2. Girişleri al
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->image_alt = $request->input('image_alt');
        $product->order = $request->input('order');
        $product->meta_title = $request->input('meta_title');
        $product->meta_tag = $request->input('meta_tag');
        $product->category = $request->input('category');
        
        $product->slug = $this->createSlug($request->input('name'));
        //Ana resim kaydet 

        if ($request->hasFile('image')) {
            $images = [];
            foreach ($request->file('image') as $file) {
                $path = $file->store('public/images');
                $images[] = basename($path);
            }
            $product->image = json_encode($images[0]);
        }

        // 3. Resim galerisi işlemleri
        if ($request->hasFile('image_gallery')) {
            $images = [];
            foreach ($request->file('image_gallery') as $file) {
                $path = $file->store('public/images');
                $images[] = basename($path);
            }
            $product->image_gallery = json_encode($images);
        }
    
        // 4. Detayları güncelle veya ekle
        $details = $request->input('details');
        
       // Silinmesi gereken detayları kontrol et
        foreach ($details as $index => $detail) {
            // Eğer detayda 'delete' alanı varsa ve değeri true ise silme işlemi yap
            if (isset($detail['delete']) && $detail['delete'] == true) {
                // Detayı bul ve sil
                InfoProduct::destroy($detail['id']);
            } 
            else if(isset($detail['id'])) {
                // Detayı güncelle
                $productDetail = InfoProduct::findOrFail($detail['id']);

                // Detay alanlarını güncelle
                $productDetail->mode = $detail['mode'];
                $productDetail->kursmm = $detail['kursmm'];
                $productDetail->lmm = $detail['lmm'];
                $productDetail->lminmm = $detail['lminmm'];
                $productDetail->dmm = $detail['dmm'];
                $productDetail->dmmm = $detail['dmmm'];
                $productDetail->dan = $detail['dan'];
                $productDetail->dann = $detail['dann'];

                if(isset($detail['silindir_cap_delete'])){
                    $productDetail->silindir_cap = null;
                }
                
                if(isset($detail['seri_baglama_delete'])){
                    $productDetail->seri_baglama = null;
                }

                // Silindir Cap dosyasını işle
                if ($request->hasFile("details.$index.silindir_cap")) {
                    $silindirCapFile = $request->file("details.$index.silindir_cap");
                    $path = $silindirCapFile->store('public/info_products');
                    $productDetail->silindir_cap = basename($path);
                }

                // Seri Baglama dosyasını işle
                if ($request->hasFile("details.$index.seri_baglama")) {
                    $seriBaglamaFile = $request->file("details.$index.seri_baglama");
                    $path = $seriBaglamaFile->store('public/info_products');
                    $productDetail->seri_baglama = basename($path);
                }

                $productDetail->save();
            }
            else{
                $mode = $detail['mode'];
                $kursmm = $detail['kursmm'];
                $lmm = $detail['lmm'];
                $lminmm = $detail['lminmm'];
                $dmm = $detail['dmm'];
                $dmmm = $detail['dmmm'];
                $dan = $detail['dan'];
                $dann = $detail['dann'];
            

                // Yeni ProductDetail oluştur
                $productDetail = new InfoProduct();
                $productDetail->product_id = $product->id;
                $productDetail->mode = $mode;
                $productDetail->kursmm = $kursmm;
                $productDetail->lmm = $lmm;
                $productDetail->lminmm = $lminmm;
                $productDetail->dmm = $dmm;
                $productDetail->dmmm = $dmmm;
                $productDetail->dan = $dan;
                $productDetail->dann = $dann;
                $productDetail->product_id = $product->id;

                // Silindir Cap dosyasını işleyelim
                if ($request->hasFile("details.$index.silindir_cap")) {
                    $silindirCapFile = $request->file("details.$index.silindir_cap");
                    $path = $silindirCapFile->store('public/info_products');
                    $productDetail->silindir_cap = basename($path);
                }

                // Seri Baglama dosyasını işleyelim
                if ($request->hasFile("details.$index.seri_baglama")) {
                    $seriBaglamaFile = $request->file("details.$index.seri_baglama");
                    $path = $seriBaglamaFile->store('public/info_products');
                    $productDetail->seri_baglama = basename($path);
                }
            

                $productDetail->save();
            }
        }
    
        // 5. Ürünü kaydet
        $product->save();
    
        return redirect()->route('products.edit', $product->id)->with('success', 'Product updated successfully');
    }
    

    public function store(Request $request)
    {
        // Diğer alanları alalım
        $product = new Product();
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->image_alt = $request->input('image_alt');
        $product->order = $request->input('order');
        $product->meta_title = $request->input('meta_title');
        $product->meta_tag = $request->input('meta_tag');
        $product->category = $request->input('category');
        $product->slug = $this->createSlug($request->input('name'));
        //Ana Resim
        if ($request->hasFile('image')) {
            $images = [];
            foreach ($request->file('image') as $file) {
                $path = $file->store('public/images');
                $images[] = basename($path);
            }
            $product->image = json_encode($images[0]);
        }

        // Ana ürün resim galerisi
        if ($request->hasFile('image_gallery')) {
            $images = [];
            foreach ($request->file('image_gallery') as $file) {
                $path = $file->store('public/images');
                $images[] = basename($path);
            }
            $product->image_gallery = json_encode($images);
        }

        $product->save();
        $newProductId = $product->id;
        // Ürün detayları
        $details = $request->input('details');
        foreach ($details as $index => $detail) {
            // Her bir detay için işlem yapabilirsiniz
            $mode = $detail['mode'];
            $kursmm = $detail['kursmm'];
            $lmm = $detail['lmm'];
            $lminmm = $detail['lminmm'];
            $dmm = $detail['dmm'];
            $dmmm = $detail['dmmm'];
            $dan = $detail['dan'];
            $dann = $detail['dann'];

            // Yeni ProductDetail oluştur
            $productDetail = new InfoProduct();
            $productDetail->product_id = $product->id;
            $productDetail->mode = $mode;
            $productDetail->kursmm = $kursmm;
            $productDetail->lmm = $lmm;
            $productDetail->lminmm = $lminmm;
            $productDetail->dmm = $dmm;
            $productDetail->dmmm = $dmmm;
            $productDetail->dan = $dan;
            $productDetail->dann = $dann;
            $productDetail->product_id = $newProductId;

            // Silindir Cap dosyasını işleyelim
            if ($request->hasFile("details.$index.silindir_cap")) {
                $silindirCapFile = $request->file("details.$index.silindir_cap");
                $path = $silindirCapFile->store('public/info_products');
                $productDetail->silindir_cap = basename($path);
            }

            // Seri Baglama dosyasını işleyelim
            if ($request->hasFile("details.$index.seri_baglama")) {
                $seriBaglamaFile = $request->file("details.$index.seri_baglama");
                $path = $seriBaglamaFile->store('public/info_products');
                $productDetail->seri_baglama = basename($path);
            }
        

            $productDetail->save();
        }
        
        
        
        return redirect()->route('products.create')->with('success', 'Product created successfully!');
    }


    //Silme 
    public function destroy($id)
    {
        $product = Product::findOrFail($id); // Veriyi bul, eğer bulunamazsa hata ver

        // Ürünü sil
        $product->delete();

        return redirect()->route('custom.page')->with('success', 'Ürün başarıyla silindi.');
    }
    public function detailsImageDelete($id)
    {
        return $id;

        die();
    
        return redirect()->route('custom.page')->with('success', 'Ürün başarıyla silindi.');
    }

   
}