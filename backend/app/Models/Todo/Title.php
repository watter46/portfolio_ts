<?php

namespace App\Models\Todo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;

    protected $fillable = ['id','title_position','title'];

    public function tasks()
    {
        return $this->hasMany('App\Models\Todo\Task');
    }

    public function scopeTaskAsc($query)
    {
        return $query->orderBy('task_position', 'asc');
    }
}
