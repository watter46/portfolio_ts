<?php

namespace App\Http\Resources\Todo\AllData;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Todo\AllData\TaskResource;


class TitleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title_position' => $this->title_position,
            'title' => $this->title,
            'tasks' => TaskResource::collection($this->whenLoaded('tasks'))
        ];
    }
}
