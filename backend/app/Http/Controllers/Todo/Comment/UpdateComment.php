<?php

namespace App\Http\Controllers\Todo\Comment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Todo\Comment\UpdateRequest;
use App\UseCases\Comment\Update as UpdateUseCase;

class UpdateComment extends Controller
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
        
        $getComment = $updateUC($data);
        
        return $getComment;
    }
}
