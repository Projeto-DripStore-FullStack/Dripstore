import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhiteNike5 from "../../assets/white-nike-5.png";
import { useCart } from "../../components/CartContext/CartContext";
import "./MyCart.css";

const MyCart = () => {
  const { produtoId } = useParams();
  const { quantidade, subtotal, atualizarCarrinho } = useCart();  // Usando o CartContext
  const [produto, setProduto] = useState(null);
  
  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/produtos/getOne/${id}`);
      setProduto(response.data);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
    }
  };

  useEffect(() => {
    console.log(produtoId)
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  const handleQuantidadeChange = (e) => {
    const novaQuantidade = Number(e.target.value);
    const totalAtualizado = (produto.price * novaQuantidade).toFixed(2);
    atualizarCarrinho(novaQuantidade, totalAtualizado);
  };

  useEffect(() => {
    if (produto) {
      const total = (produto.price * quantidade).toFixed(2);
      atualizarCarrinho(quantidade, total);
    }
  }, [quantidade, produto, atualizarCarrinho]);

  if (!produto) return <div>Carregando...</div>;

  const price = parseFloat(produto.price);
  const formattedPrice = price ? price.toFixed(2) : "0.00";
  const total = (price * quantidade).toFixed(2);

  return (
    <main className="my-cart">
      <div className="my-cart-topics">
        <p className="topic-mycart">MEU CARRINHO</p>
        <p className="topic-quantity">QUANTIDADE</p>
        <p className="topic-price">VALOR</p>
        <p className="topic-total">TOTAL</p>
      </div>
      <div className="my-cart-infos">
        <div className="cart-product">
          <img src={WhiteNike5} alt={produto.title} />
          <div>
            <p className="cart-product-name">{produto.title}</p>
            <p className="cart-product-color">
              <span>Cor: </span>{produto.cor}
            </p>
            <p className="cart-product-size">
              <span>Tamanho: </span>{produto.tamanho}
            </p>
          </div>
        </div>
        <div className="cart-quantity">
          <input
            type="number"
            min="1"
            placeholder="Quantidade"
            onChange={handleQuantidadeChange}
            value={quantidade}
          />
        </div>
        <div className="cart-unities">
          <p>R$ {formattedPrice}</p>
        </div>
        <div className="cart-total">
          <p>R$ {total}</p>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
