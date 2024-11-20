import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./FormSucesso.css";
import WhiteSneakers from "../../assets/White-Sneakers.png"; // Imagem padrão caso não haja produto

export const FormSucesso = () => {
  const { pedidoId } = useParams();
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

    if (pedidoId) {
      getPedidoById(pedidoId);
    }
  }, [pedidoId]);

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
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Nome:</span> {pedido.usuario?.nome || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>CPF:</span> {pedido.usuario?.cpf || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span> {pedido.usuario?.email || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span> {pedido.usuario?.telefone || "Não disponível"}</p>
        </div>

        <div className="form-sucesso-infoEntrega">
          <p><strong>Informações de Entrega</strong></p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {pedido.usuario.endereco || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {pedido.usuario.bairro || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {pedido.usuario.cidade || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {pedido.usuario.cep || "Não disponível"}</p>
        </div>

        <div className="form-sucesso-infoPagamento">
          <p><strong>Informações de Pagamento</strong></p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Titular do cartao:</span> {pedido.nomeCartao || "Não disponível"}</p>
          <p><span style={{ color: "rgba(143, 143, 143, 1)" }}>Final:</span> {pedido.numeroCartao || "Não disponível"}</p>
        </div>

        <div className="form-sucesso-infoResumoCompra">
          <p><strong>Resumo da compra</strong></p>
          <div className="form-sucesso-resumoProduto">
            <div className="form-sucesso-fundo-produto">
              <img className="form-sucesso-produto" src={pedido.produto ? pedido.produto.imagem : WhiteSneakers} alt={pedido.produto ? pedido.produto.title : "Produto indisponível"} />
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
            <p style={{ color: "rgba(143, 143, 143, 1)" }}>
              ou 10x de R$ {(pedido.valorpedido / 10).toFixed(2)} sem juros
            </p>
          </div>
        </div>
      </div>
        <button className="form-sucesso-btn">Voltar para Home</button>  
    </div>
  );
};
