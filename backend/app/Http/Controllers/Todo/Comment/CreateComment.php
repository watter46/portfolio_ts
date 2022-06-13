<?php

namespace App\Http\Controllers\Todo\Comment;

use App\Http\Controllers\Controller;
use App\UseCases\Comment\Create as CreateUseCase;
use App\Http\Requests\Todo\Comment\CreateRequest;

class CreateComment extends Controller
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
        
        $getComment = $createUC($data);

        return $getComment;
    }
}
