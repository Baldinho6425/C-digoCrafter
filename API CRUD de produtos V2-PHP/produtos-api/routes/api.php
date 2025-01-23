<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;

Route::get('/produto', [ProdutoController::class, 'index']); // Listar todos os produtos
Route::post('/produto', [ProdutoController::class, 'store']); // Criar um produto
Route::get('/produto/{id}', [ProdutoController::class, 'show']); // Mostrar um produto específico
Route::put('/produto/{id}', [ProdutoController::class, 'update']); // Atualizar um produto
Route::delete('/produto/{id}', [ProdutoController::class, 'destroy']); // Deletar um produto

