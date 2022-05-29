<?php

namespace App\Http\Resources\Todo\Title;

use Illuminate\Http\Resources\Json\JsonResource;

class CreateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title_position' => $this->title_position,
            'title' => $this->title,
            'tasks' => $this->tasks
        ];
    }
}
