<?php

namespace App\Http\Resources\Todo;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Todo\TitleResource;

class IndexTitleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request): TitleResource
    {
        return new TitleResource($request);
    }
}
