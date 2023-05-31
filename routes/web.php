<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CharacterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
})->name('home');

Route::get('/character/{id}', function () {
    return view('character');
})->name('character');

// Route de récupération de tout les characters
// Type : get
// Chemin : http://127.0.0.1:8000/character
// Controller : CharacterController
// Méthode : list
Route::get('/home', [CharacterController::class, 'list']);

// Route de récupération d'un characters
// Type : get
// Chemin : http://127.0.0.1:8000/character/{id}
// Controller : CharacterController
// Méthode : show
Route::get('/character/{id}', [CharacterController::class, 'show,'])->where('id', '[0-9]+');

// Route de récupération de tout les characters
// Type : get
// Chemin : http://127.0.0.1:8000/character
// Controller : CharacterController
// Méthode : list
Route::get('/character/{id}', [CharacterController::class, 'show']);
