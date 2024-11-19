import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CartSummaryConfirm.css";

const CartSummaryConfirm = ({ quantidade, total: totalProp }) => {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function getProductById(productId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/produtos/getOne/${productId}`
      );
      setProduto(response.data);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      setError("Erro ao carregar produto.");
    }
  }

  useEffect(() => {
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  const precoUnitario = parseFloat(produto?.price) || 0;
  const subtotal = precoUnitario * (quantidade || 1);

  const desconto = parseFloat(produto?.promotion) || 0;
  const totalDesconto = desconto * (quantidade || 1);
  const total = subtotal - totalDesconto; // The total calculation uses `subtotal` and `desconto`

  const valorPedido = !isNaN(total) ? total.toFixed(2) : "0.00";

  const handleConfirmarCompra = () => {
    const usuario = localStorage.getItem("id");
    if (!usuario) {
      alert("Você precisa estar logado para finalizar a compra.");
      return;
    }

    if (!produto) {
      alert("Produto não carregado. Tente novamente.");
      return;
    }

    // Redirecionando para a página de confirmação com o produto
    navigate(`/Confirm/getOne/${produto.id}`, {
      state: { produto, quantidade, total }, // Passando os dados necessários
    });
  };

  if (error) return <div>{error}</div>;
  if (!produto) return <div>Carregando...</div>;

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
      </div>
    </main>
  );
};

export default CartSummaryConfirm;
