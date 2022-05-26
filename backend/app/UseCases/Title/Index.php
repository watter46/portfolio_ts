<?php

namespace App\UseCases\Title;

use App\Models\Todo\Title;
use App\Http\Resources\Todo\AllData\TitleResource;


class Index
{
    public function __invoke()
    {
        $allData = Title::orderBy('title_position', 'asc')
                        ->with([
                            'tasks' => function($query) {
                                $query->with(['comments' => function ($query) {
                                    $query->orderBy('comment_position', 'asc');
                                }])->orderBy('task_position', 'asc');
                            }])
                        ->get();
                        
        return TitleResource::collection($allData);
    }
}
