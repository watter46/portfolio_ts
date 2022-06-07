<?php

namespace App\Http\Controllers\Todo\Comment;

use App\Http\Controllers\Controller;
use App\UseCases\Comment\Destroy as DestroyUseCase;
use App\Http\Requests\Todo\Comment\DestroyRequest;

class DestroyComment extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  App\Http\Requests\Todo\Comment\DestroyRequest  $request
     */
    public function __invoke(DestroyRequest $request, DestroyUseCase $destroyUC): void
    {
        $data = $request->validated();

        $destroyUC($data);
    }
}
