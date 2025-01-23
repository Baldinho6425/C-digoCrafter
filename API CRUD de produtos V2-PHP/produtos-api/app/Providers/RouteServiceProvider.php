<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Caminho padrão para redirecionamento após login.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Configure as rotas da aplicação.
     */
    public function boot(): void
    {
        $this->routes(function () {
            // Carrega as rotas da API
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));

            // Carrega as rotas web
            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });
    }
}
