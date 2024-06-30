<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::group(['prefix' => 'admin', 'middleware' => ['admin.user']], function () {
    
    Route::get('/custom-page', [CustomAdminController::class, 'index'])->name('custom.page');
    Route::get('/products/create', [CustomAdminController::class, 'create'])->name('products.create');
    Route::post('/products', [CustomAdminController::class, 'store'])->name('products.store');
    Route::post('/produc/{id}', [CustomAdminController::class, 'update'])->name('products.update');
  


    // Ürün düzenleme ve güncelleme
    Route::get('/products/edit/{id}', [CustomAdminController::class, 'edit'])->name('products.edit');
    Route::put('/products/{id}', [CustomAdminController::class, 'update'])->name('products.update');

    //Ürün Silme
    Route::delete('product-delete/{id}', [CustomAdminController::class, 'destroy'])->name('products.delete');
    Route::delete('details-image-delete/{id}', [CustomAdminController::class, 'detailsImageDelete'])->name('details.image.delete');

   


});

Route::any('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');
