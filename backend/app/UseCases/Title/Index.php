<?php

namespace App\UseCases\Title;

use App\Models\Todo\Title;
use App\Http\Resources\Todo\TitleResource;


class Index
{
    public function __invoke()
    {
        $allData = Title::orderBy('title_position', 'asc')
                        ->with('tasks.comments')
                        ->get();

        // $allData = Title::orderBy('title_position', 'asc')


        return TitleResource::collection($allData);
    }
}
