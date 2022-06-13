<?php

namespace App\UseCases\Comment;

use App\Models\Todo\Comment;

class Destroy
{
    public function __invoke(array $data): void
    {
        Comment::destroy($data['id']);
    }
}
