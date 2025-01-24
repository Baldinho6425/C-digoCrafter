<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('home');
});

Route::resource('products', ProductController::class);

// Add a custom route for delete confirmation
Route::get('/products/{product}/delete', [ProductController::class, 'delete'])->name('products.delete');

Route::get('/', function () {
    return view('home');
})->name('home');