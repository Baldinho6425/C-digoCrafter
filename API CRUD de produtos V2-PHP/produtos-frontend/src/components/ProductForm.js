import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductForm.css";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    acabamento: "",
    undVenda: "",
    custo: "",  // Adicionando o campo de custo
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/produto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        alert("Produto criado com sucesso!");
        navigate("/produtos");
      } else {
        const errorData = await response.json();
        alert(`Erro ao criar o produto: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div className="form-container">
      <h2>Criar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Acabamento:</label>
          <input
            type="text"
            name="acabamento"
            value={product.acabamento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Unidade de Venda:</label>
          <input
            type="text"
            name="undVenda"
            value={product.undVenda}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Custo:</label>
          <input
            type="number"
            name="custo"
            value={product.custo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}

export default ProductForm;
