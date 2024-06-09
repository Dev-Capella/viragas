<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\News;

class NewsController extends Controller
{
    public function getNews(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::withTranslations($languageCode)->orderBy('created_at', 'asc')->get();
        $data = $data->translate($languageCode);
        foreach ($data as $new) {

            if ($new->image) {
                $new->image = url('storage/' . str_replace('\\', '/', $new->image));
            } else {
                $new->image = null;
            }
        }
        return response()->json($data);
    }
    public function getNew(Request $request, $slug)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::withTranslations($languageCode)->where('slug', $slug)->first();
        $data = $data->translate($languageCode);

        if ($data->image) {
            $data->image = url('storage/' . str_replace('\\', '/', $data->image));
        } else {
            $data->image = null;
        }

        // Temizlenmiş meta tag değerlerini içeren $data nesnesini JSON olarak döndürme
        return response()->json($data);
    }
}
