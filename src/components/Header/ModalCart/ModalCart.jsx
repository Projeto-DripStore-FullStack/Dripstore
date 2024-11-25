import "./ModalCart.css";
import { useEffect, useState } from "react";
import sneaker from "../../../assets/white-nike-5.png";
import { Link, useNavigate } from "react-router-dom";

export function ModalCart() {
  const [carrinho, setCarrinho] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  const handleEsvaziarCarrinho = () => {
    localStorage.removeItem("carrinho");
    setCarrinho([]);
  };

  const handleRealizarCompra = () => {
    if (carrinho.length > 0) {
      navigate("/Confirm", { state: { carrinho, total: calcularTotalCarrinho() } });
    } else {
      alert("Seu carrinho está vazio!");
    }
  };

  const calcularTotalCarrinho = () =>
    carrinho.reduce((acc, produto) => {
      const precoComDesconto =
        produto.promocao > 0
          ? produto.preco - produto.promocao
          : produto.preco;
      return acc + precoComDesconto * produto.quantidade;
    }, 0);

  return (
    <div className="my-cart-modal">
      <h4 className="cart-modal-title">Meu carrinho</h4>
      {carrinho.length > 0 ? (
        <div className="cart-modal-products">
          {carrinho.map((produto) => {
            const precoComDesconto =
              produto.promocao > 0
                ? produto.preco - produto.promocao
                : produto.preco;

            return (
              <div key={produto.id} className="cart-modal-product">
                <div className="cart-modal-product-img">
                  <img src={produto.imagem || sneaker} alt={`${produto.title} (${produto.quantidade})`} />
                  <h4 className="cart-modal-product-description">
                    {produto.title} ({produto.quantidade})
                  </h4>
                </div>
                <div className="cart-modal-product-price">
                  <h3>R$ {precoComDesconto.toFixed(2)}</h3>
                  <p>R$ {produto.preco.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
      <div className="total-modal-cart-value">
        <h4>Valor Total:</h4>
        <h4>R$ {calcularTotalCarrinho().toFixed(2)}</h4>
      </div>
      <div className="cart-modal-actions">
        <Link className="empty-cart" onClick={handleEsvaziarCarrinho}>
          Esvaziar
        </Link>
        <button onClick={handleRealizarCompra}>Realizar Compra</button>
      </div>
    </div>
  );
}
