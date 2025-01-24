import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    if (productToDelete) {
      try {
        await axios.delete(`http://localhost:8000/api/products/${productToDelete.id}`);
        setProducts(products.filter((product) => product.id !== productToDelete.id));
        setShowPopup(false); // Fecha o pop-up após exclusão
        alert("Produto excluído com sucesso.");
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert("Erro ao excluir o produto.");
      }
    }
  };

  const openPopup = (product) => {
    setProductToDelete(product); // Define o produto a ser excluído
    setShowPopup(true); // Abre o pop-up
  };

  const closePopup = () => {
    setShowPopup(false);
    setProductToDelete(null); // Reseta o produto selecionado
  };

  return (
    <div className="product-list-container">
      {/* Botão Criar Novo Produto */}
      <div className="create-button-container">
        <Link to="/create">
          <button className="create-button">Novo Produto +</button>
        </Link>
      </div>

      <h1>Produtos</h1>
      <p>Você está visualizando o número total de produtos.</p>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Acabamento</th>
            <th>UND VENDA</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.finish}</td>
                <td>{product.unit}</td>
                <td>
                  <Link to={`/edit/${product.id}`}>
                    <button className="action-button edit-button">Editar</button>
                  </Link>
                  <button
                    className="action-button delete-button"
                    onClick={() => openPopup(product)}
                  >
                    Excluir
                  </button>
                  <Link to={`/details/${product.id}`}>
                    <button className="action-button details-button">Detalhes</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Confirmação</h2>
            <p>Deseja realmente excluir o produto <strong>{productToDelete.name}</strong>?</p>
            <div className="popup-actions">
              <button className="confirm-btn" onClick={handleDelete}>
                Confirmar
              </button>
              <button className="cancel-btn" onClick={closePopup}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
