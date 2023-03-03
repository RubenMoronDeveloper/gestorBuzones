<?php

use App\Http\Controllers\Api\CartaController;
use App\Http\Controllers\Api\VecinoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Api Vecino

Route::controller(VecinoController::class)->group(function (){
    Route::get('/vecinos','index');
    Route::post('/vecino','store');
    Route::get('/vecino/{id}','show');
    Route::put('/vecino/{id}','update');
    Route::delete('/vecino/{id}','destroy');
    Route::get('/vecino','login');
   /*  Route::get('/vecinoCartas/{id}','innerJoin'); */
});
//Api carta
Route::controller(CartaController::class)->group(function (){
    Route::get('/cartas','index');
    Route::post('/carta','store');
    Route::get('/carta/{id}','show');
    Route::put('/carta/{id}','update');
    Route::delete('/carta/{id}','destroy');
    Route::get('cartaList/{id}', 'listById');
});
