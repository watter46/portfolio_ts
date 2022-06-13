<?php

namespace App\Http\Controllers\Todo\Task;

use App\Http\Controllers\Controller;
use App\UseCases\Task\Create as CreateUseCase;
use App\Http\Requests\Todo\Task\CreateRequest;

class CreateTask extends Controller
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
        
        $getTask = $createUC($data);

        return $getTask;
    }
}
