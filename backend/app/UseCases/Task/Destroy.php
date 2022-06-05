<?php

namespace App\UseCases\Task;

use App\Models\Todo\Task;

class Destroy
{
    public function __invoke(array $data): void
    {
        Task::destroy($data['id']);
    }
}
