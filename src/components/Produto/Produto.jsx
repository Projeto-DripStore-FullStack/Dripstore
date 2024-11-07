import { useEffect, useState } from "react";
import KSwiss from "../../assets/KSwiss.png";
import "./Produto.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Produto() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/produtos");
      const produtosData = response.data;

      if (Array.isArray(produtosData)) {
        setProdutos(produtosData);
      } else {
        console.error("Expected an array but got:", produtosData);
      }
    } catch (error) {
      console.error("Erro ao buscar as categorias:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleProductClick = (produtoId) => {
    navigate(`/Cart/getOne/${produtoId}`); 
  };

  return (
    <div className="card-produto">
      {produtos.map((produto, index) => (
        <div key={produto.id} onClick={() => handleProductClick(produto.id)}>
          <div className="product-board">
            <div className="product-discount">{produto.promotion}% Off</div>
            <img src={KSwiss} alt="" className="product-image" />
          </div>
          <p className="product-categoria">{produto.title} </p>
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
