import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/cadastro-produto'); // Redireciona para a página de cadastro de produto
  };

  return (
    <div className="products-page">
      <header>
        <h2>Produtos</h2>
        <p>Você está visualizando o número total de produtos</p>
        <button className="new-product-button" onClick={handleAddProduct}>
          Novo Produto +
        </button>
      </header>

      {products.length > 0 ? (
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.finish}</td>
                <td>{product.unit}</td>
                <td>
                  <button className="edit-button">Editar</button>
                  <button className="delete-button">Excluir</button>
                  <button className="details-button">Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum produto adicionado ainda.</p>
      )}
    </div>
  );
}

export default ProductsPage;
