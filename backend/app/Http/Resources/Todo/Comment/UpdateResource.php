<?php

namespace App\Http\Resources\Todo\Comment;

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
            'task_id' => $this->task_id,
            'comment' => $this->comment,
            'comment_position' => $this->comment_position
        ];
    }
}
