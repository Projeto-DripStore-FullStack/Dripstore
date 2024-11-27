import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartSummaryConfirm.css";

const CartSummaryConfirm = ({ quantidade, total: totalProp, promocao }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Usando total e promocao diretamente da prop
  const total = totalProp || 0; // O total passado como prop
  const promocaoPorcentagem = parseFloat(promocao) || 0; // A promoção (percentual)
  const desconto = (total * promocaoPorcentagem) / 100; // Cálculo do desconto
  const totalComDesconto = total - desconto; // Total após o desconto
  const subtotal = total + desconto; // Subtotal com o desconto aplicado
  const valorPedido = !isNaN(totalComDesconto) ? totalComDesconto.toFixed(2) : "0.00"; // Valor do pedido com desconto

  if (error) return <div>{error}</div>;

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
            <p className="value">R$ {total.toFixed(2)}</p>
          </div>
        </div>
        {promocaoPorcentagem > 0 && (
          <div className="cart-summary-desconto">
            <div className="desconto">
              <p>
                <span>Desconto ({promocaoPorcentagem}%):</span>
              </p>
              <p className="value">- R$ {desconto.toFixed(2)}</p>
            </div>
          </div>
        )}
        <div className="cart-summary-total">
          <div className="total">
            <h3>
              <span>Total com Desconto</span>
            </h3>
            <div className="total-value">
              <h3>R$ {totalComDesconto.toFixed(2)}</h3>
              <p>ou 10x de R$ {(totalComDesconto / 10).toFixed(2)} sem juros</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartSummaryConfirm;
