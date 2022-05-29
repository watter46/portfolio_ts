<?php

namespace App\UseCases\Task;

use App\Models\Todo\Task;

class Create
{
    public function invoke(Task $task): Task
    {
        // $task->save();
        // // 他にも処理がある場合はここに色々書く
        // return $task;
    }
}
