<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;

class InfoProduct extends Model
{
    protected $fillable = [
        'id',
        'product_id',
        'mode',
        'kursmm',
        'lmm',
        'lminmm',
        'dmm',
        'dmmm',
        'dan',
        'dann',
       
    ];
    protected $casts = [
        'silindir_cap' => 'array',
        'seri_baglama' => 'array',
    ];
   

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
