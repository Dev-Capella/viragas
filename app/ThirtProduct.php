<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class ThirtProduct extends Model
{
    use Translatable;
    protected $translatable = ['title', 'content','product_detail'];
}
