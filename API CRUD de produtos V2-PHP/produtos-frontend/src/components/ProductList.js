import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, nome: "Produto 1", acabamento: "Acabamento 1", valor: "100", custo: "50" },
    { id: 2, nome: "Produto 2", acabamento: "Acabamento 2", valor: "150", custo: "80" },
  ]); // Produtos estáticos
  const [loading, setLoading] = useState(false); // Não estamos mais utilizando o carregamento dinâmico
  const navigate = useNavigate(); // useNavigate para navegar entre as páginas

  // Função para editar um produto
  const handleEdit = (id) => {
    navigate(`/editar-produto/${id}`); // Navega para a página de edição do produto
  };

  // Função para excluir um produto
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Deseja realmente excluir o produto com ID ${id}?`
    );

    if (confirmDelete) {
      try {
        // Se o produto for excluído com sucesso do backend, adicione o código aqui para fazer a exclusão.
        setProducts(products.filter((product) => product.id !== id)); // Remove o produto da lista
        alert("Produto excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
        alert("Erro ao excluir o produto. Tente novamente.");
      }
    }
  };

  // Função para visualizar os detalhes de um produto
  const handleDetails = (id) => {
    navigate(`/detalhes-produto/${id}`); // Navega para a página de detalhes do produto
  };

  return (
    <div className="product-list">
      <h1>Lista de Produtos</h1>
      <button onClick={() => navigate("/criar-produto")}>
        Criar Novo Produto
      </button>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {products.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Acabamento</th>
                  <th>Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nome}</td>
                    <td>{product.acabamento}</td>
                    <td>{product.valor}</td>
                    <td>
                      <button
                        onClick={() => handleDetails(product.id)}
                        style={{
                          marginRight: "10px",
                          backgroundColor: "green",
                          color: "white",
                        }}
                      >
                        Detalhes
                      </button>
                      <button
                        onClick={() => handleEdit(product.id)}
                        style={{
                          marginRight: "10px",
                          backgroundColor: "blue",
                          color: "white",
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        style={{
                          backgroundColor: "red",
                          color: "white",
                        }}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
