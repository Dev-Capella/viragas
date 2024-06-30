<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\InfoProduct;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image_gallery',
        'image_alt',
        'order',
        'meta_title',
        'meta_tag',
    ];

    protected $casts = [
        'image_gallery' => 'array',
    ];

    public function details()
    {
        return $this->hasMany(InfoProduct::class);
    }
}
