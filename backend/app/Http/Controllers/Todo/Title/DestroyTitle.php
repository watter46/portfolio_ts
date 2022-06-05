<?php

namespace App\Http\Controllers\Todo\Title;

use App\Http\Controllers\Controller;
use App\UseCases\Title\Destroy as DestroyUseCase;
use App\Http\Requests\Todo\Title\DestroyRequest;

class DestroyTitle extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  App\Http\Requests\Todo\Title\DestroyRequest  $request
     * @param  App\UseCases\Title\Destroy as DestroyUseCase $destroyUC
     */
    public function __invoke(DestroyRequest $request, DestroyUseCase $destroyUC): void
    {
        $data = $request->validated();
        
        $destroyUC($data);
    }
}
