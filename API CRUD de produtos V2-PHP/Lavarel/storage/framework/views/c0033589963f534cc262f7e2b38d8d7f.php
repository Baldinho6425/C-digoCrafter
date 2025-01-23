<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listagem de Produtos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #45a049;
        }
        .btn-container {
            margin-top: 20px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Listagem de Produtos</h1>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <!-- Exemplo de produtos (em um cenário real, isso seria preenchido dinamicamente) -->
                <tr>
                    <td>1</td>
                    <td>Produto A</td>
                    <td>R$ 19,99</td>
                    <td>Descrição do Produto A</td>
                    <td>
                        <a href="#" class="btn">Detalhes</a>
                        <a href="#" class="btn">Editar</a>
                        <a href="#" class="btn">Excluir</a>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Produto B</td>
                    <td>R$ 29,99</td>
                    <td>Descrição do Produto B</td>
                    <td>
                        <a href="#" class="btn">Detalhes</a>
                        <a href="#" class="btn">Editar</a>
                        <a href="#" class="btn">Excluir</a>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Produto C</td>
                    <td>R$ 39,99</td>
                    <td>Descrição do Produto C</td>
                    <td>
                        <a href="#" class="btn">Detalhes</a>
                        <a href="#" class="btn">Editar</a>
                        <a href="#" class="btn">Excluir</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="btn-container">
            <a href="#" class="btn">Adicionar Novo Produto</a>
            <a href="<?php echo e(route('home')); ?>" class="btn btn-back">Voltar</a>
        </div>
    </div>
</body>
</html>

<?php /**PATH C:\Users\eduar\Desktop\ProductV2\laravel\resources\views/products/index.blade.php ENDPATH**/ ?>