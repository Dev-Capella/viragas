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
}