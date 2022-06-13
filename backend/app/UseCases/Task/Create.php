<?php

namespace App\UseCases\Task;

use App\Http\Resources\Todo\Task\CreateResource;
use App\Models\Todo\Task;

class Create
{
    public function __invoke(array $data)
    {
        $data = Task::create($data);
        
        return new CreateResource($data);
    }
}
