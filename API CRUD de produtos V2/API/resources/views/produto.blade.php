<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Produtos</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased bg-gray-50 text-gray-900">
    <div class="container mx-auto p-6">
        <div class="flex justify-between items-center mb-6"> 
            <div class =" bg-slate-200" >
                <h1 class="text-3xl font-semibold mb-1 text-gray-800">Produtos</h1>
                <p class="text-sm text-gray-500">Você está visualizando o número total de produtos</p>
            </div>
            <button class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out shadow-md">
                Novo Produto +
            </button>
        </div>

        <div class="bg-white border rounded-lg shadow-md overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-slate-200">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acabamento</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UND VENDA</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PRODUTO 0001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">BRANCO</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">UND</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex gap-2">
                                <button class="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Editar
                                </button>
                                <button class="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition duration-300 ease-in-out">
                                    Excluir
                                </button>
                                <button class="px-3 py-1 bg-black text-white rounded text-xs hover:bg-gray-800 transition duration-300 ease-in-out">
                                    Detalhes
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PRODUTO 0002</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PRETO</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">KG</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex gap-2">
                                <button class="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Editar
                                </button>
                                <button class="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition duration-300 ease-in-out">
                                    Excluir
                                </button>
                                <button class="px-3 py-1 bg-black text-white rounded text-xs hover:bg-gray-800 transition duration-300 ease-in-out">
                                    Detalhes
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>