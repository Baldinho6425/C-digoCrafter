<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Adicionar Produto</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased bg-gray-100 text-gray-900">
    <div class="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div class="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-6 sm:p-8">
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Adicionar Produto</h1>
                    <p class="text-sm text-gray-600">Você está adicionando um novo produto</p>
                </div>

                <form action="{{ route('produtos.store') }}" method="POST" class="space-y-6">
                    @csrf
                    
                    <div class="space-y-6">
                        <div>
                            <label for="nome" class="block text-sm font-medium text-gray-700 mb-1">
                                Nome<span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                placeholder="Nome"
                                required
                            >
                        </div>

                        <div>
                            <label for="acabamento" class="block text-sm font-medium text-gray-700 mb-1">
                                Acabamento
                            </label>
                            <input
                                type="text"
                                name="acabamento"
                                id="acabamento"
                                class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                placeholder="Acabamento"
                            >
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="unidade_venda" class="block text-sm font-medium text-gray-700 mb-1">
                                    Unidade de Venda
                                </label>
                                <select
                                    name="unidade_venda"
                                    id="unidade_venda"
                                    class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out appearance-none bg-white"
                                >
                                    <option value="" disabled selected>Unidade de Venda</option>
                                    <option value="UND">UND</option>
                                    <option value="KG">KG</option>
                                    <option value="M">M</option>
                                    <option value="M2">M²</option>
                                </select>
                            </div>

                            <div>
                                <label for="custo" class="block text-sm font-medium text-gray-700 mb-1">
                                    Custo<span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="custo"
                                    id="custo"
                                    class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="R$ 0,00"
                                    required
                                >
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3 pt-6">
                        <a
                            href="{{ route('produtos.index') }}"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                        >
                            Cancelar
                        </a>
                        <button
                            type="submit"
                            class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        // Formatação do campo de custo para moeda brasileira
        document.getElementById('custo').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = (Number(value) / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            e.target.value = value;
        });
    </script>
</body>
</html>