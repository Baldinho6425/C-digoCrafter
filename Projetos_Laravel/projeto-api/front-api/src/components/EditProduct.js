import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams(); // Obter o ID do produto da URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    finish: "",
    unit: "",
    cost: "",
  });

  useEffect(() => {
    // Buscar os detalhes do produto para edição
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/products/${id}`, product);
      alert("Produto atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      alert("Erro ao atualizar o produto.");
    }
  };

  return (
    <div className="edit-product-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Voltar
      </button>

      <form className="edit-product-form" onSubmit={handleSubmit}>
        <h1>
          Editar Produto <span>{id}</span>
        </h1>
        <p className="description">Você está editando um produto</p>

        <label htmlFor="name">Nome*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="finish">Acabamento</label>
        <input
          type="text"
          id="finish"
          name="finish"
          value={product.finish}
          onChange={handleInputChange}
        />

        <label htmlFor="unit">Unidade de Venda</label>
        <select
          id="unit"
          name="unit"
          value={product.unit}
          onChange={handleInputChange}
        >
          <option value="">Selecione</option>
          <option value="UND">UND</option>
          <option value="KG">KG</option>
          <option value="MT">MT</option>
        </select>

        <label htmlFor="cost">Custo*</label>
        <input
          type="text"
          id="cost"
          name="cost"
          value={product.cost}
          onChange={handleInputChange}
          required
        />

        <div className="form-buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button type="submit" className="save-button">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
