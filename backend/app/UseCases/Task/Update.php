<?php

namespace App\UseCases\Task;

use App\Models\Todo\Task;
use App\Http\Resources\Todo\Task\UpdateResource;


class Update
{
    public function __invoke(array $data)
    {
        if (!array_key_exists('updatePositionList', $data)) {
            Task::upsert($data, ['id'], ['title_id', 'task', 'done', 'is_showing', 'task_position']);

            $result = Task::find($data['id']);

            return new UpdateResource($result);
        }
        else {
            $data = $data['updatePositionList'];

            Task::upsert($data, ['id'], ['title_id', 'task', 'done', 'is_showing', 'task_position']);

            $ids = array_column($data, 'id');
            $result = Task::orderBy('task_position', 'asc')->find($ids);

            return UpdateResource::collection($result);
        }
    }
}
