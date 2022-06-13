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
     * @param  \Illuminate\Http\CreateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(CreateRequest $request, CreateUseCase $createUC)
    {
        $data = $request->validated();
        
        $getTitle = $createUC($data);

        return $getTitle;
    }
}
