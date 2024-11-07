import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WhiteNike5 from "../../assets/white-nike-5.png";
import axios from "axios";
import "./MyCart.css";

const MyCart = () => {
  const { produtoId } = useParams(); 
  const [produto, setProduto] = useState(null); 

  const getProductById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/produtos/getOne/${id}`
      );
      setProduto(response.data); 
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
    }
  };

  useEffect(() => {
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  if (!produto) return <div>Carregando...</div>;

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
          <img src={WhiteNike5} alt={produto.title} />{" "}
          <div>
            <p className="cart-product-name">{produto.title}</p>{" "}
            <p className="cart-product-color">
              <span>Cor: </span>
              {produto.color} 
            </p>
            <p className="cart-product-size">
              <span>Tamanho: </span>
              {produto.size} 
            </p>
          </div>
        </div>
        <div className="cart-quantity">
          <input type="number" min="1" placeholder="Quantidade" />{" "}
        </div>
        <div className="cart-unities">
          <p>{produto.price}</p>
        </div>
        <div className="cart-total">
          <p>{produto.price}</p>{" "}
        </div>
      </div>
      <div className="my-cart-discount-and-track">
        <div className="cart-coupon">
          <form action="">
            <p>Cupom de desconto</p>
            <input type="text" placeholder="Insira seu código" />
            <button type="submit">OK</button>
          </form>
        </div>
        <div className="cart-track">
          <form action="">
            <p>Calcular Frete</p>
            <input type="text" placeholder="Insira seu CEP" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
