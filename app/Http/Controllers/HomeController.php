<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeSlider;
use App\Product;
use App\About;
use App\HomeSlogan;
use App\Catalog;
use App\Certificate;
use App\Activity;
use App\Reference;



class HomeController extends Controller
{
    public function getSlider(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = HomeSlider::withTranslations($languageCode)->orderBy('order', 'asc')->get();
        $data = $data->translate($languageCode);
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
    public function getHomeProductSlider()
    {
        $data = Product::where('home_active', '1')->orderBy('order', 'asc')->get();
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
    public function getAboutUs(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = About::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data = $data[0];
        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }

        return response()->json($data);
    }
    public function getHomeSlogan(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = HomeSlogan::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);

        $data = $data[0];
        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }

        return response()->json($data);
    }
    public function getCatalog()
    {
      
    
        // Get the catalog data
        $data = Catalog::get();
    
        // Process each catalog entry
        foreach ($data as $catalog) {
          
            // tr
            $catalogUrls = json_decode($catalog['catalog_url'], true);
            if( $catalogUrls)
            {
                $downloadLink = $catalogUrls[0]['download_link'];
                $catalog->catalog_url = url('storage/' . str_replace('\\', '/', $downloadLink));
            }else
            {
                $catalog->catalog_url = null;
            }
           
            // en 
            $catalogUrls_en = json_decode($catalog['catalog_url_en'], true);
            if($catalogUrls_en)
            {
                $downloadLink = $catalogUrls_en[0]['download_link'];
                $catalog->catalog_url_en = url('storage/' . str_replace('\\', '/', $downloadLink));
            }else{
                $catalog->catalog_url_en = null;
            }
           

            $catalog->image = url('storage/' . str_replace('\\', '/', $catalog->image));
        }
    
        return response()->json($data);
    }
    public function getCertificate(Request $request)
    {

        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = Certificate::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
            if ($slider->image_en) {
                $slider->image_en = url('storage/' . str_replace('\\', '/', $slider->image_en));
            } else {
                $slider->image_en = null;
            }
        }
        return response()->json($data);
    }
    public function getActivites(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = Activity::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
    public function getReference()
    {
        $data = Reference::get();
        foreach ($data as $slider) {

            if ($slider->image) {
                $slider->image = url('storage/' . str_replace('\\', '/', $slider->image));
            } else {
                $slider->image = null;
            }
        }
        return response()->json($data);
    }
}