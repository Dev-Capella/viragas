<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'submit',
]);
//branch test
//Product
Route::get('/get-products/{value}', [
    ProductController::class,
    'getProducts',
]);
Route::get('/get-products-categories', [
    ProductController::class,
    'getProductsCategories',
]);

//Slider
Route::get('/get-slider', [
    HomeController::class,
    'getSlider',
]);

Route::get('/get-prodcut-slider', [
    HomeController::class,
    'getHomeProductSlider',
]);

//Sayfalar
Route::get('/get-page/{slug}', [
    PageController::class,
    'getPage',
]);

//About us
Route::get('/get-aboutus', [
    HomeController::class,
    'getAboutUs',
]);

//Home Slogan
Route::get('/get-slogan', [
    HomeController::class,
    'getHomeSlogan',
]);

//Catalog
Route::get('/get-catalog', [
    HomeController::class,
    'getCatalog',
]);

//Sertifika
Route::get('/get-certificate', [
    HomeController::class,
    'getCertificate',
]);

//Faliyetlerimizi
Route::get('/get-activities', [
    HomeController::class,
    'getActivites',
]);
//Referanslar
Route::get('/get-referance', [
    HomeController::class,
    'getReference',
]);
//Haberler

Route::get('/get-news', [
    NewsController::class,
    'getNews',
]);

Route::get('/get-new/{slug}', [
    NewsController::class,
    'getNew',
]);