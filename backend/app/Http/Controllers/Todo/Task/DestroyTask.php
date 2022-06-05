<?php

namespace App\Http\Controllers\Todo\Task;

use App\Http\Controllers\Controller;
use App\UseCases\Task\Destroy as DestroyUseCase;
use App\Http\Requests\Todo\Task\DestroyRequest;

class DestroyTask extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  App\Http\Requests\Todo\Task\DestroyRequest  $request
     */
    public function __invoke(DestroyRequest $request, DestroyUseCase $destroyUC): void
    {
        $data = $request->validated();

        $destroyUC($data);
    }
}
