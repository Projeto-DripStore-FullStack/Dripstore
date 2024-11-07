import { useState, useEffect } from "react";
import axios from "axios";
import "./CartSummary.css";
import { useParams } from "react-router-dom";

const CartSummary = ({ quantidade }) => {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);

  const getProductById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/produtos/getOne/${id}`
      );
      console.log("Produto retornado:", response.data); // Verifique a resposta da API
      setProduto(response.data);
      setError(null); // Limpa o erro em caso de sucesso
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      setError(
        "Erro ao buscar os dados do produto. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!produto) {
    return <div>Carregando...</div>;
  }

  const precoUnitario = produto.price;
  const subtotal = precoUnitario * quantidade;
  const desconto = produto.discount || 0;
  const totalDesconto = desconto * quantidade;
  const total = subtotal - totalDesconto;

  return (
    <main className="cart-summary">
      <div className="cart-summary-title">
        <p>Resumo</p>
      </div>
      <div className="cart-summary-body">
        <div className="cart-summary-subtotal">
          <div className="subtotal">
            <p>
              <span>Subtotal:</span>
            </p>
            <p className="value">R$ {subtotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="cart-summary-track">
          <div className="track">
            <p>
              <span>Frete:</span>
            </p>
            <p className="value">R$ 0,00</p>
          </div>
        </div>
        <div className="cart-summary-discount">
          <div className="discount">
            <p>
              <span>Desconto:</span>
            </p>
            <p className="value">R$ {totalDesconto.toFixed(2)}</p>
          </div>
        </div>
        <div className="cart-summary-total">
          <div className="total">
            <h3>
              <span>Total</span>
            </h3>
            <div className="total-value">
              <h3>R$ {total.toFixed(2)}</h3>
              <p>ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
            </div>
          </div>
        </div>
        <button>Continuar</button>
      </div>
    </main>
  );
};

export default CartSummary;
