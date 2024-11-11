/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import KSwiss from "../../assets/KSwiss.png";
import "./Produto.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Produto() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Extrai o id da categoria da URL
  const searchParams = new URLSearchParams(location.search);
  const categoriaPecaId = searchParams.get("categoriaPeca_id");

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/produtos");
      const produtosData = response.data;

      if (Array.isArray(produtosData)) {
        // Filtra os produtos com base no id da categoria
        const produtosFiltrados = categoriaPecaId
          ? produtosData.filter(produto => produto.categoriaPeca_id === parseInt(categoriaPecaId))
          : produtosData;
        
        setProdutos(produtosFiltrados);
      } else {
        console.error("Expected an array but got:", produtosData);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [categoriaPecaId]); // Atualiza os produtos ao alterar a categoria

  const handleProductClick = (produtoId) => {
    navigate(`/Cart/getOne/${produtoId}`); 
  };

  return (
    <div className="card-produto">
      {produtos.map((produto) => (
        <div key={produto.id} onClick={() => handleProductClick(produto.id)}>
          <div className="product-board">
            <div className="product-discount">{produto.promotion}% Off</div>
            <img src={KSwiss} alt="" className="product-image" />
          </div>
          <p className="product-categoria">{produto.title}</p>
          <p className="product-nome">{produto.subtitle} - {produto.genero}</p>
          <div className="product-preco">
            <p className="product-full">${produto.price}</p>
            <p className="product-oferta">$100</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produto;
