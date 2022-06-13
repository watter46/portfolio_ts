<?php

namespace App\Http\Resources\Todo\Task;

use Illuminate\Http\Resources\Json\JsonResource;

class UpdateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {   
        clock($this);
        return [
            'id' => $this->id,
            'title_id' => $this->title_id,
            'task' => $this->task,
            'done' => boolval($this->done),
            'is_showing' => boolval($this->is_showing),
            'task_position' => $this->task_position
        ];
    }
}
