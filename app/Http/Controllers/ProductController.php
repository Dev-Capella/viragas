<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;


class ProductController extends Controller
{
    public function getProducts(string $value)
    {
        $perPage = 12; // Her sayfada kaç ürün gösterileceği
        $page = intval($value); // İstenen sayfa numarasını alın

        // Toplam ürün sayısını alın
        $totalProducts = Product::count();

        // Atlanacak kayıt sayısını hesaplayın
        $skip = ($page - 1) * $perPage;

        // Belirli bir aralıktaki ürünleri alın ve paginate edin
        $data = Product::skip($skip)->take($perPage)->get();
        foreach ($data as $product) {
            if ($product->image_gallery) {
                $images = json_decode($product->image_gallery);
                foreach ($images as &$image) {
                    $image = url('storage/' . str_replace('\\', '/', $image));
                }
                $product->image_gallery = $images;
            } else {
                $product->image_gallery = null;
            }
            if ($product->image) {
                $images = json_decode($product->image);
                $product->image = url('storage/' . str_replace('\\', '/', $product->image));
            } else {
                $product->image = null;
            }
        }

        // JSON yanıtı olarak veriyi ve toplam ürün sayısını gönderin
        return response()->json([
            'data' => $data,
            'total' => $totalProducts
        ]);
    }
    public function getProductsCategories()
    {
        $data = ProductCategory::get();
        foreach ($data as $productCat) {
            if ($productCat->image) {
                $productCat->image = url('storage/' . str_replace('\\', '/', $productCat->image));
            } else {
                $productCat->image = null;
            }
        }
        return response()->json($data);
    }
    public function getProductList($slug)
    {
        $data = Product::where('category',$slug)->get();
        foreach ($data as $product) {
            if ($product->image_gallery) {
                $images = json_decode($product->image_gallery);
                foreach ($images as &$image) {
                    $image = url('storage/' . str_replace('\\', '/', $image));
                }
                $product->image_gallery = $images;
            } else {
                $product->image_gallery = null;
            }
            if ($product->image) {
                $images = json_decode($product->image);
                $product->image = url('storage/images/' . str_replace('\\', '/', trim($product->image,'"')));
            } else {
                $product->image = null;
            }
        } 
       

        return response()->json($data);
    }
    public function getProductDetail($slug)
    {
        $product = Product::with('details')->where('slug',$slug)->first();
       
            if ($product->image_gallery) {
                $images = json_decode($product->image_gallery);
                foreach ($images as &$image) {
                    $image = url('storage/images/' . str_replace('\\', '/', $image));
                }
                $product->image_gallery = $images;
            } else {
                $product->image_gallery = null;
            }


            
            $newArray = $this->splitByImage($product->details);

            if (!empty($newArray)) {
                foreach ($newArray as $key => $array) {
                    foreach ($array as $detail) {
                        if($detail->silindir_cap)
                        {
                            $detail->silindir_cap = url('storage/info_products/' . str_replace('\\', '/', $detail->silindir_cap));
                        }else
                        {
                            $detail->silindir_cap=null;
                        }
    
                        if($detail->seri_baglama)
                        {
                            $detail->seri_baglama = url('storage/info_products/' . str_replace('\\', '/', $detail->seri_baglama));
                        }else
                        {
                            $detail->seri_baglama=null;
                        }
                    }
                }
              
            }
            
            $product->newArray = $newArray;
            unset($product->details);

        return response()->json($product);
    }
    
    public function splitByImage($details) {
        $result = [];
        $tempArray = [];
        $foundFirstImage = false;
    
        foreach ($details as $item) {
            if ($item['silindir_cap'] != null) {
                if ($foundFirstImage) {
                    $result[] = $tempArray;
                    $tempArray = [];
                } else {
                    $foundFirstImage = true;
                }
            }
            $tempArray[] = $item;
        }
    
        // Eğer son grup boş değilse ekle
        if (!empty($tempArray)) {
            $result[] = $tempArray;
        }
    
        return $result;
    }
    
   
    
    
}



  