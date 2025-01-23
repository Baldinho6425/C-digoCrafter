import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams(); // Obtém o ID do produto pela URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    nome: "",
    acabamento: "",
    valor: "",
  });
  const [loading, setLoading] = useState(true);

  // Busca o produto pelo ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/produtos/${id}`);
        setProduct(response.data); // Preenche o estado com os dados do produto
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Atualiza o produto
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/produtos/${id}`, product);
      alert("Produto atualizado com sucesso!");
      navigate("/"); // Redireciona para a lista de produtos após a atualização
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      alert("Erro ao atualizar o produto. Tente novamente.");
    }
  };

  // Lida com alterações nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={product.nome}
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
          <label>Valor:</label>
          <input
            type="number"
            name="valor"
            value={product.valor}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
