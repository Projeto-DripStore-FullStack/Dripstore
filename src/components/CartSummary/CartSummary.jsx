import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext";
import "./CartSummary.css";

const CartSummary = () => {
  const { produtoId } = useParams();
  const { quantidade, subtotal } = useCart();  // Usando o CartContext
  const [produto, setProduto] = useState(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/produtos/getOne/${id}`);
      setProduto(response.data);
      localStorage.setItem("produtoId", produtoId);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      setError("Erro ao carregar produto.");
    }
  };

  useEffect(() => {
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  const calcularTotalComDesconto = () => {
    const descontoUnitario = parseFloat(produto?.promotion) || 0;
    const precoUnitario = parseFloat(produto?.price) || 0;
    const descontoTotal = descontoUnitario * quantidade;

    setTotal(subtotal - descontoTotal);
  };

  useEffect(() => {
    if (produto) {
      calcularTotalComDesconto();
    }
  }, [subtotal, quantidade, produto]);

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
    localStorage.setItem("produtoId", produto.id);
  
    navigate(`/Confirm/getOne/${produto.id}`, {
      state: { produto, quantidade, total },
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
        <button onClick={handleConfirmarCompra}>Comprar</button>
      </div>
    </main>
  );
};

export default CartSummary;
