<?php

namespace App\UseCases\Title;

use App\Http\Resources\Todo\Title\UpdateResource;
Use App\Models\Todo\Title;

class Update
{
    public function __invoke(array $data)
    {
        if (!array_key_exists('updatePositionList', $data)) {
            Title::upsert($data, ['id'], ['title', 'title_position']);

            $result = Title::find($data['id']);

            return new UpdateResource($result);
        }
        else {
            $data = $data['updatePositionList'];

            Title::upsert($data, ['id'], ['title', 'title_position']);

            $ids = array_column($data, 'id');
            $result = Title::orderBy('title_position', 'asc')->find($ids);

            return UpdateResource::collection($result);
        }
    }
}
