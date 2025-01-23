<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return view('products.index');
    }

    public function create()
    {
        return view('products.create');
    }

    public function store(Request $request)
    {
        // Logic to store a new product
    }

    public function show($id)
    {
        return view('products.show', ['id' => $id]);
    }

    public function edit($id)
    {
        return view('products.edit', ['id' => $id]);
    }

    public function update(Request $request, $id)
    {
        // Logic to update a product
    }

    public function destroy($id)
    {
        // Logic to delete a product
    }

    public function delete($id)
    {
        return view('products.delete', ['id' => $id]);
    }
}

