import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Obter o ID do produto da URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Função para buscar os detalhes do produto
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
        alert("Erro ao carregar os detalhes do produto.");
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Voltar
      </button>

      {product ? (
        <div className="product-details-card">
          <h1>
            DETALHES DO PRODUTO <span>{id}</span>
          </h1>
          <p className="description">Você está visualizando os detalhes de um produto</p>
          <p>
            <strong>Nome do produto:</strong>{" "}
            <span className="product-name">{product.name}</span>
          </p>
          <p>
            <strong>Acabamento:</strong> <span>{product.finish}</span>
          </p>
          <p>
            <strong>Unidade de venda:</strong> <span>{product.unit}</span>
          </p>
          <p>
            <strong>Custo:</strong> <span>R$ {product.cost}</span>
          </p>
        </div>
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
};

export default ProductDetails;
