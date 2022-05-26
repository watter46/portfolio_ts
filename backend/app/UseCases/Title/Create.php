<?php

namespace App\UseCases\Title;

use App\Http\Resources\Todo\Title\CreateResource;

use App\Models\Todo\Title;


class Create
{
    public function __invoke(array $data)
    {
        $data = Title::create($data);
        
        return new CreateResource($data);
    }
}
