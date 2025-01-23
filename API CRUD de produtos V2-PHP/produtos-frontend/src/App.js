import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao StockPilot</h1>
        <p>
          Gerencie seus produtos com facilidade.
        </p>
        <button
          className="App-button"
          onClick={() => navigate('/produtos')}
        >
          Login
        </button>
       
      </header>
    </div>
  );
}

export default App;
