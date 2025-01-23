import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm"; // Componente para criar produto
import EditProduct from "./components/EditProduct"; // Componente para editar produto
import ProductDetails from "./components/ProductDetails"; // Componente para visualizar detalhes do produto

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} /> {/* Página inicial com lista de produtos */}
        <Route path="/criar-produto" element={<ProductForm />} /> {/* Página para criar produto */}
        <Route path="/editar-produto/:id" element={<EditProduct />} /> {/* Página para editar produto */}
        <Route path="/detalhes-produto/:id" element={<ProductDetails />} /> {/* Página para detalhes do produto */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
