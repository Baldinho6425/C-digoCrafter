<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/produto', function () {
    return view('produto');
});
route::get('/CadastroProduto', function () {
    return view('cadastro_produto');
});
