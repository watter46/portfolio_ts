<?php

namespace App\Http\Resources\Todo;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CommentResource;


class TaskResource extends JsonResource
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
            'title_id' => $this->title_id,
            'task_position' => $this->task_position,
            'done' => boolVal($this->done),
            'is_showing' => boolVal($this->is_showing),
            'task' => $this->task,
            'comments' => CommentResource::collection($this->whenLoaded('comments'))
        ];
    }
}
