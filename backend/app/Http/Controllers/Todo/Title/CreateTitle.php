<?php

namespace App\Http\Controllers\Todo\Title;

use App\Http\Controllers\Controller;
use App\UseCases\Title\Create as CreateUseCase;
use App\Http\Requests\Todo\Title\CreateRequest;

class CreateTitle extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(CreateRequest $request, CreateUseCase $createUC): IndexTitleResource
    {
        $data = $request->validated();
        
        return new IndexTitleResource($createUC($data));
    }
}
