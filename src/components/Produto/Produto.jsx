/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import KSwiss from "../../assets/KSwiss.png";
import "./Produto.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Produto({ filters }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const categoriaPecaId = searchParams.get("categoriaPeca_id");

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/produtos");
      const produtosData = response.data;

      if (Array.isArray(produtosData)) {
        const produtosFiltrados = categoriaPecaId
          ? produtosData.filter(
              (produto) =>
                produto.categoriaPeca_id === parseInt(categoriaPecaId)
            )
          : produtosData;

        setProdutos(produtosFiltrados);
      } else {
        console.error("Expected an array but got:", produtosData);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [categoriaPecaId]);

  const filteredProducts = produtos.filter((produto) => {
    return (
      (!filters?.marca ||
        filters.marca.length === 0 ||
        filters.marca.includes(produto.marca)) &&
      (!filters?.categoriaFuncao ||
        filters.categoriaFuncao.length === 0 ||
        filters.categoriaFuncao.includes(produto.categoriaFuncao)) &&
      (!filters?.genero ||
        filters.genero.length === 0 ||
        filters.genero.includes(produto.genero)) &&
      (!filters?.tamanho ||
        filters.tamanho.length === 0 ||
        filters.tamanho.includes(produto.tamanho))
    );
  });

  const handleProductClick = (produtoId) => {
    navigate(`/Cart/getOne/${produtoId}`);
  };

  return (
    <div className="produto-container">
      {loading && (
        <div className="overlay">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      <div className="card-produto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto) => (
            <div
              key={produto.id}
              onClick={() => handleProductClick(produto.id)}
            >
              <div className="product-board">
                {produto.promotion && (
                  <div className="product-discount">
                    {produto.promotion}% Off
                  </div>
                )}{" "}
                <img src={KSwiss} alt="" className="product-image" />
              </div>
              <p className="product-categoria">{produto.title}</p>
              <p className="product-nome">
                {produto.subtitle} - {produto.genero}
              </p>
              <div className="product-preco">
                <p className="product-full">${produto.price}</p>
                <p className="product-oferta">
                  ${produto.price * (1 - produto.promotion * 0.01)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado com os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}

export default Produto;
