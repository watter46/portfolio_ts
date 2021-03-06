<?php

namespace App\Models\Todo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['task_id', 'comment_position', 'comment'];

    public function tasks() {
        return $this->belongsTo('App\Models\Todo\Task');
    }
}
