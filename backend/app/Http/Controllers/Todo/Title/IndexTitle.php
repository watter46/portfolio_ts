<?php

namespace App\Http\Controllers\Todo\Title;

use App\Http\Controllers\Controller;
use App\UseCases\Title\Index as IndexUseCase;

class IndexTitle extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(IndexUseCase $IndexUC)
    {
        return $IndexUC();
    }
}
