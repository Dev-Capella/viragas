<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class InfoPage extends Model
{
    use Translatable;
    protected $translatable = ['title', 'meta_title', 'meta_tag'];
}