import { useState, useEffect } from "react";
import axios from "axios";
import "./CartSummary.css";
import { useNavigate, useParams } from "react-router-dom";

const CartSummary = ({ quantidade }) => {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para buscar o produto pelo ID
  async function getProductById(productId) {
    try {
      const response = await axios.get(`/api/produtos/${productId}`);
      setProduto(response.data); // Define o produto após o sucesso da requisição
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

  const precoUnitario = produto?.price && !isNaN(parseFloat(produto.price)) ? parseFloat(produto.price) : 0;
  const subtotal = precoUnitario * (quantidade || 1); // Subtotal sem descontos ainda

  const desconto = produto?.promotion && !isNaN(parseFloat(produto.promotion)) ? parseFloat(produto.promotion) : 0;
  const totalDesconto = desconto * (quantidade || 1); // Total do desconto
  const total = subtotal - totalDesconto; // Total com desconto

  const valorPedido = isNaN(total) ? 0 : total; // Caso o total seja inválido, define como 0

  // Função para confirmar a compra
  const handleConfirmarCompra = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario || (!usuario.id && !usuario.cpf && !usuario.email)) {
      alert("Você precisa estar logado para finalizar a compra.");
      return;
    }

    const numeroPedido = `PED${Date.now()}`;

    // Preparar os produtos para envio
    const produtosPedido = [{
      produtoId: produto.id, // Produto sendo comprado
      quantidade: quantidade || 1, // Quantidade do produto
    }];

    // Criação do objeto de pedido com produtos
    const request = {
      numeroPedido: numeroPedido,
      formapagamento: "Débito", // Definido, mas pode ser alterado com o valor que o usuário escolher
      valorpedido: parseFloat(valorPedido.toFixed(2)),
      status: "Encaminhado", // Status inicial
      suarioId: usuario.id,
      produtos: {
        create: produtosPedido.map((prod) => ({
          produto: {
            connect: { id: prod.produtoId }, // Conecta o produto ao pedido
          },
          quantidade: prod.quantidade, // Quantidade do produto
        })),
      },
    };

    try {
      // Enviar o pedido com os produtos
      await axios.post("http://localhost:3000/pedidos", request);
      alert("Compra realizada com sucesso!");
      navigate(`/Orders/${numeroPedido}`);
    } catch (e) {
      console.log("Erro ao criar pedido", e);
      alert("Erro ao realizar a compra. Tente novamente.");
    }
  };

  // Exibição de erro ou mensagem de carregamento
  if (error) {
    return <div>{error}</div>;
  }

  if (!produto) {
    return <div>Carregando...</div>;
  }

  // Renderiza o valor de subtotal e total com valores corretos
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
            <p className="value">R$ {subtotal > 0 ? subtotal.toFixed(2) : "0.00"}</p>
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
