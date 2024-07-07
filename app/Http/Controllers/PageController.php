<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\InfoPage;

class PageController extends Controller
{
    public function getPage(Request $request, $slug)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
     
        $data = InfoPage::withTranslations($languageCode)->where('slug', $slug)->first();
 
        $data = $data->translate($languageCode);
       
        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }
        if($data->meta_tag > 0)
        {
            $metaTags = explode(',', $data->meta_tag);

            // Ayrıştırılan meta tag değerlerini temizleme ve düzenleme
            foreach ($metaTags as $tag) {
                $tag = trim($tag); // Boşlukları temizle
                if (!empty($tag)) { // Boş olmayanları ekle
                    $cleanedMetaTags[] = $tag;
                }
            }
            $data->meta_tag = $cleanedMetaTags; // Değişken adını düzeltme: cleanedMetaTags -> $cleanedMetaTags
        }else
        {
            $data->meta_tag = null;
        }
       

        // Temizlenmiş meta tag değerlerini içeren $data nesnesini JSON olarak döndürme
        return response()->json($data);
    }
}