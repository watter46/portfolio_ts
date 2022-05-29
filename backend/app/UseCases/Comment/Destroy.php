<?php

namespace App\UseCases\Comment;

use App\Models\Todo\Comment;

class Destroy
{
    public function invoke(Comment $comment): Comment
    {
        // $task->save();
        // // 他にも処理がある場合はここに色々書く
        // return $task;
    }
}
