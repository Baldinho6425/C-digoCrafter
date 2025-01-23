import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes"; // Importe o arquivo com as rotas unificadas
import reportWebVitals from "./reportWebVitals"; // Mantém o monitoramento de desempenho (opcional)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes /> {/* Substituímos o antigo <App /> pelas rotas unificadas */}
  </React.StrictMode>
);

// Medição de desempenho (opcional). Substitua o console.log por integração com serviços como Google Analytics.
reportWebVitals();
