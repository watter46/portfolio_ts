<?php

namespace App\Http\Controllers\Todo\Task;

use App\Http\Controllers\Controller;
use App\Http\Requests\Todo\Task\UpdateRequest;
use App\UseCases\Task\Update as UpdateUseCase;

class UpdateTask extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateRequest $request, UpdateUseCase $updateUC)
    {
        $data = $request->validated();

        $getTask = $updateUC($data);
        
        return $getTask;
    }
}
