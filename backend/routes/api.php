<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Todo\Title\IndexTitle;
use App\Http\Controllers\Todo\Title\CreateTitle;
use App\Http\Controllers\Todo\Title\UpdateTitle;
use App\Http\Controllers\Todo\Title\DestroyTitle;

use App\Http\Controllers\Todo\Task\CreateTask;
use App\Http\Controllers\Todo\Task\UpdateTask;
use App\Http\Controllers\Todo\Task\DestroyTask;

use App\Http\Controllers\Todo\Comment\CreateComment;
use App\Http\Controllers\Todo\Comment\UpdateComment;
use App\Http\Controllers\Todo\Comment\DestroyComment;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function() {
    Route::get('/', IndexTitle::class);
    
    Route::prefix('todo/title')->group(function () {
        Route::post('/post', CreateTitle::class);
        Route::patch('/{id}/patch', UpdateTitle::class);
        Route::delete('/{id}/delete', DestroyTitle::class);
    });

    Route::prefix('todo/task')->group(function () {
        Route::post('/post', CreateTask::class);
        Route::patch('/{id}/patch', UpdateTask::class);
        Route::delete('/{id}/delete', DestroyTask::class);
    });

    Route::prefix('todo/comment')->group(function () {
        Route::post('/post', CreateComment::class);
        Route::patch('/{id}/patch', UpdateComment::class);
        Route::delete('/{id}/delete', DestroyComment::class);
    });
});
