<?php

namespace App\UseCases\Comment;

use App\Http\Resources\Todo\Comment\CreateResource;
use App\Models\Todo\Comment;

class Create
{
    public function __invoke(array $data)
    {
        $data = Comment::create($data);
        
        return new CreateResource($data);
    }
}
