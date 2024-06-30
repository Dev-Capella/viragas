<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\User;
use App\Product;
use App\InfoProduct;

class CustomAdminController extends Controller
{
   
    public function index()
    {
        $products = Product::all();
        return view('admin.custom-page', compact('products'));
    }

    public function create()
    {
        return view('admin.create-product');
    }
   
    public function edit($id)
    {
        $product = Product::with('details')->findOrFail($id);
        
        return view('admin.edit-product', compact('product'));
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