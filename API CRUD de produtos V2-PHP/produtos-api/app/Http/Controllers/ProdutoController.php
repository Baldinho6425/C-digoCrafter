<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    // Lista todos os produtos
    public function index()
    {
        return Produto::all();
    }

    // Cria um novo produto
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nome' => 'required|string|max:255',
            'acabamento' => 'required|string|max:255',
            'valor' => 'required|numeric|min:0',
        ]);

        $produto = Produto::create($validatedData);

        return response()->json($produto, 201);
    }

    // Mostra um produto específico
    public function show($id)
    {
        $produto = Produto::find($id);

        if (!$produto) {
            return response()->json(['error' => 'Produto não encontrado'], 404);
        }

        return $produto;
    }

    // Atualiza um produto
    public function update(Request $request, $id)
    {
        $produto = Produto::find($id);

        if (!$produto) {
            return response()->json(['error' => 'Produto não encontrado'], 404);
        }

        $validatedData = $request->validate([
            'nome' => 'sometimes|string|max:255',
            'acabamento' => 'sometimes|string|max:255',
            'valor' => 'sometimes|numeric|min:0',
        ]);

        $produto->update($validatedData);

        return response()->json($produto, 200);
    }

    // Remove um produto
    public function destroy($id)
    {
        $produto = Produto::find($id);

        if (!$produto) {
            return response()->json(['error' => 'Produto não encontrado'], 404);
        }

        $produto->delete();

        return response()->json(['message' => 'Produto removido com sucesso'], 200);
    }
}
