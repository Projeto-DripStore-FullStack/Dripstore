import { useState, useEffect } from "react";
import axios from "axios";
import "./CartSummary.css";
import { useNavigate, useParams } from "react-router-dom";

const CartSummary = ({ quantidade }) => {
  
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  async function getProductById(productId) {
    try {
      console.log("Olha aqui",produtoId)
      const response = await axios.get(`/produtos/${productId}`);
      setProduto(response.data);
      console.log(produto)
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

  const precoUnitario =
    produto?.price && !isNaN(parseFloat(produto.price))
      ? parseFloat(produto.price)
      : 0;
  const subtotal = precoUnitario * (quantidade || 1);

  const desconto =
    produto?.promotion && !isNaN(parseFloat(produto.promotion))
      ? parseFloat(produto.promotion)
      : 0;
  const totalDesconto = desconto * (quantidade || 1);
  const total = subtotal - totalDesconto;

  const valorPedido = isNaN(total) ? 0 : total;

  const handleConfirmarCompra = async () => {
    getProductById()
    const usuario = localStorage.getItem("id");
    console.log(usuario);

    if (!usuario) {
      alert("Você precisa estar logado para finalizar a compra.");
      return;
    }

    const numeroPedido = `PED${Date.now()}`;

    const produtosPedido = [
      {
        produtoId: produto.id,
        quantidade: quantidade || 1,
      },
    ];

    const request = {
      numeroPedido: numeroPedido,
      formapagamento: "Débito",
      valorpedido:valorPedido,
      status: "Encaminhado",
      usuario_id: parseFloat(usuario),
    };

    try {
      await axios.post("http://localhost:3000/pedidos", request);
      console.log(request)
      alert("Compra realizada com sucesso!");
      navigate(`/Orders/getOne/${numeroPedido}`);
    } catch (e) {
      console.log("Erro ao criar pedido", e);
      alert("Erro ao realizar a compra. Tente novamente.");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!produto) {
    return <div>Carregando...</div>;
  }

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
            <p className="value">
              R$ {subtotal > 0 ? subtotal.toFixed(2) : "0.00"}
            </p>
          </div>
        </div>
        <div className="cart-summary-total">
          <div className="total">
            <h3>
              <span>Total</span>
            </h3>
            <div className="total-value">
              <h3>R$ {total > 0 ? total.toFixed(2) : "0.00"}</h3>
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
