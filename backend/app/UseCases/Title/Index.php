<?php

namespace App\UseCases\Title;

use App\Models\Todo\Title;
use App\Http\Resources\IndexTitleResource;


class Index
{
    public function __invoke(): IndexTitleResource
    {
        $allData = Title::orderBy('title_position', 'asc')
                        ->with('tasks.comments')
                        ->get();

        // $allData = Title::orderBy('title_position', 'asc')


        return new IndexTitleResource($allData);
    }
}
