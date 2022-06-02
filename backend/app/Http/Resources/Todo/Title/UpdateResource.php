<?php

namespace App\Http\Resources\Todo\Title;

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
            'title' => $this->title,
            'title_position' => $this->title_position
        ];
    }
}
