import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Pega o ID do produto da URL
  const [product, setProduct] = useState(null); // Estado para armazenar o produto
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado para erro

  // Função para buscar os detalhes do produto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/produtos/${id}`);
        setProduct(response.data); // Atualiza o estado com os dados do produto
        setLoading(false); // Desativa o estado de carregamento
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        setError("Erro ao carregar os detalhes do produto.");
        setLoading(false); // Desativa o carregamento mesmo em caso de erro
      }
    };

    fetchProduct(); // Chama a função para buscar o produto
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="product-details">
      <h1>Detalhes do Produto</h1>
      <table>
        <tbody>
          <tr>
            <td><strong>ID</strong></td>
            <td>{product.id}</td>
          </tr>
          <tr>
            <td><strong>Nome</strong></td>
            <td>{product.nome}</td>
          </tr>
          <tr>
            <td><strong>Acabamento</strong></td>
            <td>{product.acabamento}</td>
          </tr>
          <tr>
            <td><strong>Valor</strong></td>
            <td>{product.valor}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default ProductDetails;
