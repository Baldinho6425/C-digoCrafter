import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    finish: '',
    unit: '',
    cost: '', 
    price: '', 
  });
  const [message, setMessage] = useState(''); // Para exibir mensagens de feedback
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/products', newProduct);
      console.log('Produto criado:', response.data);
      setMessage('Produto criado com sucesso!');
      setNewProduct({ name: '', finish: '', unit: '', cost: '', price: '' }); // Resetar formulário
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
      setMessage('Erro ao criar o produto. Verifique os dados e tente novamente.');
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Voltar para a página anterior
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Criar Novo Produto</h1>
      {message && <p style={{ color: message.includes('Erro') ? 'red' : 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Acabamento:</label>
          <input
            type="text"
            name="finish"
            value={newProduct.finish}
            onChange={handleInputChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Unidade de Venda:</label>
          <input
            type="text"
            name="unit"
            value={newProduct.unit}
            onChange={handleInputChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Custo:</label>
          <input
            type="number"
            name="cost"
            value={newProduct.cost}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Preço:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            required
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit" style={{ marginRight: '10px' }}>Criar Produto</button>
        <button type="button" onClick={handleGoBack}>Voltar</button>
      </form>
    </div>
  );
};

export default CreateProduct;
