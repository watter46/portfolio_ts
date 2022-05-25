<?php

namespace App\UseCases\Title;

use App\Models\Todo\Title;
use App\Http\Resources\IndexTitleResource;


class Create
{
    public function __invoke(array $data): IndexTitleResource
    {
        $data = Title::create($data);

        $response = Title::where('id', $data->id)->get();
        
        return new IndexTitleResource($response);
    }
}
