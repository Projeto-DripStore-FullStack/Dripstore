import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./FormSucesso.css";
import WhiteSneakers from "../../assets/White-Sneakers.png"; // Imagem padrão caso não haja produto

export const FormSucesso = () => {
  const { numeroPedido } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    async function getPedidoById(id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/pedidos/getOne/${id}`
        );
        setPedido(response.data);
      } catch (error) {
        console.error("Erro ao buscar o pedido:", error.response?.data || error.message);
      }
    }

    if (numeroPedido) {
      getPedidoById(numeroPedido);
    }
  }, [numeroPedido]);

  if (!pedido) return <div>Carregando dados do pedido...</div>;

  const produto = pedido.produtos && pedido.produtos.length > 0 ? pedido.produtos[0] : null;

  return (
    <div className="form-sucesso-body">
      <div className="form-sucesso-container">
        <div className="form-sucesso-header">
          <div>🎉</div>
          <div>Compra Realizada com sucesso!</div>
        </div>

        <div className="form-sucesso-infoPessoal">
          <p><strong>Informações Pessoais</strong></p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>CPF:</span> {pedido.usuario?.cpf || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span> {pedido.usuario?.email || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Nome:</span> {pedido.usuario?.nome || "Não disponível"}</p>
        </div>

        <div className="form-sucesso-infoEntrega">
          <p><strong>Informações de Entrega</strong></p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {pedido.endereco || "Não disponível"}</p>
        </div>

        <div className="form-sucesso-infoPagamento">
          <p><strong>Informações de Pagamento</strong></p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Total:</span> R${pedido.valorpedido ? pedido.valorpedido.toFixed(2) : "0.00"}</p>
        </div>

        <div className="form-sucesso-infoResumoCompra">
          <p><strong>Resumo da compra</strong></p>
          <div className="form-sucesso-resumoProduto">
            <div className="form-sucesso-fundo-produto">
              <img className="form-sucesso-produto" src={produto ? produto.imagem : WhiteSneakers} alt={produto ? produto.nome : "Produto indisponível"} />
            </div>
            <div className="form-sucesso-nomeProduto">
              <p>{produto ? produto.nome : "Produto não disponível"}</p>
            </div>
          </div>
          <div className="form-sucesso-infoTotal">
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>Total</p>
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              R${pedido.valorpedido ? pedido.valorpedido.toFixed(2) : "0.00"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
