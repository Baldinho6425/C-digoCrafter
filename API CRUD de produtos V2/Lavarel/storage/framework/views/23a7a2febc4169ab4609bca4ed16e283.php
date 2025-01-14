<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Management</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            margin-bottom: 2rem;
        }
        .button-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }
        .button {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Product Management</h1>
        <div class="button-container">
            <button onclick="window.location.href='<?php echo e(route('products.index')); ?>'" class="button">Listagem de Produtos</button>
            <button onclick="window.location.href='<?php echo e(route('products.create')); ?>'" class="button">Cadastro de Produtos</button>
            <button onclick="window.location.href='<?php echo e(route('products.show', 1)); ?>'" class="button">Detalhes do Produto</button>
            <button onclick="window.location.href='<?php echo e(route('products.edit', 1)); ?>'" class="button">Edição de Produtos</button>
            <button onclick="if(confirm('Tem certeza que deseja excluir este produto?')) window.location.href='<?php echo e(route('products.delete', 1)); ?>'" class="button">Exclusão de Produtos</button>
        </div>
    </div>
</body>
</html>

<?php /**PATH C:\Users\eduar\Desktop\ProductV2\laravel\resources\views/home.blade.php ENDPATH**/ ?>