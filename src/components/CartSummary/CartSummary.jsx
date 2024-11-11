import { useState, useEffect } from "react";
import axios from "axios";
import "./CartSummary.css";
import { useNavigate, useParams } from "react-router-dom";

const CartSummary = ({ quantidade }) => {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getProductById = async (id) => {
    try {
      axios.post('http://localhost:3000/pedidos', request, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log("Produto retornado:", response.data);
      setProduto(response.data);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      setError("Erro ao buscar os dados do produto. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    if (produtoId) {
      getProductById(produtoId);
    }
  }, [produtoId]);

  const precoUnitario = produto?.price && !isNaN(parseFloat(produto.price)) ? parseFloat(produto.price) : 0;
  const subtotal = precoUnitario * (quantidade || 1); // Using the prop directly

  const desconto = produto?.promotion && !isNaN(parseFloat(produto.promotion)) ? parseFloat(produto.promotion) : 0;
  const totalDesconto = desconto * (quantidade || 1);
  const total = subtotal - totalDesconto;
  
  const valorPedido = isNaN(total) ? 0 : total;

  const handleConfirmarCompra = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario || (!usuario.id && !usuario.cpf && !usuario.email)) {
      alert("Você precisa estar logado para finalizar a compra.");
      return;
    }

    const numeroPedido = `PED${Date.now()}`;

    const request = {
      numeroPedido: numeroPedido,
      formapagamento: "Débito",
      valorpedido: parseFloat(valorPedido.toFixed(2)),
      status: "Encaminhado",
      usuario: {
        connect: {
          id: usuario.id, // Garantir que o ID do usuário seja passado corretamente
        },
      },
    };

    try {
      await axios.post("http://localhost:3000/pedidos", request);
      alert("Compra realizada com sucesso!");
      navigate(`/Orders/${numeroPedido}`);
    } catch (e) {
      console.log("Erro ao criar pedido", e);
      alert("Erro ao realizar a compra. Tente novamente.");
    }
  };

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

