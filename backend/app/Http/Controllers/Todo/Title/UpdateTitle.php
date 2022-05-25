<?php

namespace App\Http\Controllers\Todo\Title;

use App\Http\Controllers\Controller;
use App\UseCases\Title\Update as UpdateUseCase;
use App\Http\Requests\Todo\Title\UpdateRequest;

class UpdateTitle extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateRequest $request, UpdateUseCase $updateUC): void
    {
        $data = $request->validated();
        
        $updateUC($data);
    }
}
