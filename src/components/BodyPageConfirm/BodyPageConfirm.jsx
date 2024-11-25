import { useLocation, useNavigate } from "react-router-dom";
import CartSummaryConfirm from "../CartSummaryConfirm/CartSummaryConfirm";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./BodyPageConfirm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BodyPageConfirm = () => {
  const [usuario, setUsuario] = useState({});
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validadeCartao, setValidadeCartao] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("Credito");
  const [cvvCartao, setCvvCartao] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { carrinho, total } = state || { carrinho: [], total: 0 };

  useEffect(() => {
    console.log("Produtos no carrinho:", carrinho);
    console.log("Total:", total);
  }, [carrinho, total]);

  useEffect(() => {
    const usuarioId = localStorage.getItem("id");
    if (usuarioId) {
      axios
        .get(`http://localhost:3000/usuarios/getOne/${usuarioId}`)
        .then((response) => {
          setUsuario(response.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar dados do usuário:", error);
        });
    } else {
      console.log("Usuário não encontrado, ID não disponível.");
    }
  }, []);

  const handleConfirmarCompra = async () => {
    if (!usuario.id) {
      toast.error("Você precisa estar logado para finalizar a compra.");
      return;
    }

    const produtosNoCarrinho = carrinho.map((produto) => ({
      produto_id: produto.id,
      quantidade: produto.quantidade,
    }));

    const request = {
      numeroPedido: `PED${Date.now()}`,
      formapagamento: formaPagamento,
      valorpedido: total,
      status: "Encaminhado",
      nomeCartao,
      usuario_id: usuario.id,
      validadeCartao,
      cvvCartao,
      numeroCartao,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        cpf: usuario.cpf,
        telefone: usuario.telefone,
        email: usuario.email,
        endereco: usuario.endereco,
        bairro: usuario.bairro,
        cidade: usuario.cidade,
        complemento: usuario.complemento,
        cep: usuario.cep,
      },
      produtos: produtosNoCarrinho,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/pedidos",
        request
      );
      console.log("Pedido criado com sucesso:", response.data);
      toast.success("Compra realizada com sucesso!");
      navigate(`/Success/getOne/${response.data.id}`);
    } catch (error) {
      console.log("Erro ao criar pedido", error);
      toast.error("Erro ao realizar a compra. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body-confirm-container">
      {loading && (
        <div className="overlay">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="title-page-confirm">
        <h1>Finalizar Compra</h1>
      </div>
      <div className="div-forms-and-resume">
        <div className="forms-page-confirm">
          <div className="div-form-my-info">
            <p className="title-my-info-page-confirm">Informações pessoais</p>
            <div className="inputs-form-page-confirm">
              <InputParaForm
                label="Nome Completo*"
                placeholder="Insira seu nome"
                value={usuario.nome || ""}
                disabled
              />
              <InputParaForm
                label="CPF*"
                placeholder="Insira seu CPF"
                value={usuario.cpf || ""}
                disabled
              />
              <InputParaForm
                label="E-mail*"
                placeholder="Insira seu login ou email"
                value={usuario.email || ""}
                disabled
              />
              <InputParaForm
                label="Celular*"
                placeholder="Insira seu celular"
                value={usuario.telefone || ""}
                disabled
              />
            </div>
          </div>

          <div className="div-form-my-adress">
            <p className="title-my-info-page-confirm">Informações de Entrega</p>
            <div className="inputs-form-page-confirm">
              <InputParaForm
                label="Endereço*"
                placeholder="Insira seu endereço"
                value={usuario.endereco || ""}
                disabled
              />
              <InputParaForm
                label="Bairro *"
                placeholder="Insira seu Bairro"
                value={usuario.bairro || ""}
                disabled
              />
              <InputParaForm
                label="Cidade*"
                placeholder="Insira sua Cidade"
                value={usuario.cidade || ""}
                disabled
              />
              <InputParaForm
                label="Complemento"
                placeholder="Insira complemento"
                value={usuario.complemento || ""}
                disabled
              />
              <InputParaForm
                label="CEP*"
                placeholder="Insira seu CEP"
                value={usuario.cep || ""}
                disabled
              />
            </div>
          </div>

          <div className="div-form-my-paymant-info">
            <p className="title-my-info-page-confirm">
              Informações de Pagamento
            </p>
            <div className="inputs-radio-form-page-confirm">
              <div className="radios">
                <div className="radio-type">
                  <input
                    type="radio"
                    name="pagamento"
                    value="Credito"
                    checked={formaPagamento === "Credito"}
                    onChange={(e) => setFormaPagamento(e.target.value)}
                  />{" "}
                  <p>Cartão de Crédito</p>
                </div>
                <div className="radio-type">
                  <input
                    type="radio"
                    name="pagamento"
                    value="Debito"
                    checked={formaPagamento === "Debito"}
                    onChange={(e) => setFormaPagamento(e.target.value)}
                  />{" "}
                  <p>Cartão de Débito</p>
                </div>
                <div className="radio-type">
                  <input
                    type="radio"
                    name="pagamento"
                    value="Boleto"
                    checked={formaPagamento === "Boleto"}
                    onChange={(e) => setFormaPagamento(e.target.value)}
                  />{" "}
                  <p>Boleto</p>
                </div>
              </div>
              <InputParaForm
                label="Nome do Cartão*"
                placeholder="Insira o nome do Cartão"
                value={nomeCartao}
                onChange={(e) => setNomeCartao(e.target.value)}
              />
              <InputParaForm
                label="Número do cartão *"
                placeholder="Insira o Número do cartão"
                value={numeroCartao}
                onChange={(e) => setNumeroCartao(e.target.value)}
              />
              <InputParaForm
                label="Data de validade*"
                placeholder="Insira a data de validade"
                value={validadeCartao}
                onChange={(e) => setValidadeCartao(e.target.value)}
              />
              <InputParaForm
                label="CVV"
                placeholder="Insira seu CVV"
                value={cvvCartao}
                onChange={(e) => setCvvCartao(e.target.value)}
              />
            </div>
          </div>

          <div className="form-sucesso-infoTotal">
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>Total</p>
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              R$ {total.toFixed(2)}
            </p>
            <p style={{ color: "rgba(143, 143, 143, 1)" }}>
              ou 10x de R$ {(total / 10).toFixed(2)} sem juros
            </p>
          </div>
          <button className="form-confirm-btn" onClick={handleConfirmarCompra}>
            Realizar Pagamento
          </button>
        </div>

        <div className="resume">
          <CartSummaryConfirm quantidade={quantidade} total={total} />
        </div>
      </div>
    </div>
  );
};
