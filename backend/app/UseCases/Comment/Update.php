<?php

namespace App\UseCases\Comment;

use App\Http\Resources\Todo\Comment\UpdateResource;
use App\Models\Todo\Comment;


class Update
{
    public function __invoke(array $data)
    {
        if (!array_key_exists('updatePositionList', $data)) {
            Comment::upsert($data, ['id'], ['task_id', 'comment', 'comment_position']);

            $result = Comment::find($data['id']);

            return new UpdateResource($result);
        }
        else {
            $data = $data['updatePositionList'];

            Comment::upsert($data, ['id'], ['task_id', 'comment', 'comment_position']);

            $ids = array_column($data, 'id');
            $result = Comment::orderBy('comment_position', 'asc')->find($ids);

            return UpdateResource::collection($result);
        }
    }
}
