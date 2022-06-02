<?php

namespace App\Models\Todo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['title_id','done','task_position', 'is_showing', 'task'];

    public function titles()
    {
        return $this->belongsTo('App\Models\Todo\Title');
    }

    public function comments() {
        return $this->hasMany('App\Models\Todo\Comment');
    }

    public function scopeTaskAsc($query)
    {
        return $query->orderBy('comment_position', 'asc');
    }
}
