import { useLocation, useNavigate } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./BodyPageConfirm.css";
import { useEffect, useState } from "react";
import axios from "axios"; // Não se esqueça de importar o axios

export const BodyPageConfirm = () => {
  const [usuario, setUsuario] = useState({});
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validadeCartao, setValidadeCartao] = useState("");
  const [cvvCartao, setCvvCartao] = useState("");
  const [total, setTotal] = useState(0); // Defina o total corretamente
  const [quantidade, setQuantidade] = useState(1); // Defina a quantidade de produtos
  const [produto, setProduto] = useState({}); // Defina o produto
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar o ID do usuário no localStorage
    const usuarioId = localStorage.getItem("id");

    if (usuarioId) {
      // Buscar os dados do usuário pela API ou de um localStorage
      axios.get(`http://localhost:3000/usuarios/${usuarioId}`)
        .then(response => {
          setUsuario(response.data);
        })
        .catch(error => {
          console.log("Erro ao buscar dados do usuário:", error);
        });
    } else {
      console.log("Usuário não encontrado, ID não disponível.");
    }
  }, []);

  const handleConfirmarCompra = async () => {
    if (!usuario.id) {
      alert("Você precisa estar logado para finalizar a compra.");
      return;
    }

    const { nome, cpf, telefone, email, endereco, bairro, cidade, complemento, cep } = usuario;

    const numeroPedido = `PED${Date.now()}`;
    const request = {
      numeroPedido,
      formapagamento: "Débito", // Defina corretamente conforme o tipo de pagamento
      valorpedido: total,
      status: "Encaminhado",
      usuario_id: usuario.id, // Usando o ID do usuário
      produtos: [{ produtoId: produto.id, quantidade }],
      nomeCartao,
      validadeCartao,
      cvvCartao,
      numeroCartao,
      usuario: {
        id: usuario.id,
        nome,
        cpf,
        telefone,
        email,
        endereco,
        bairro,
        cidade,
        complemento,
        cep,
      },
      produtos: [produto], // Passando o produto corretamente
    };

    try {
      const response = await axios.post("http://localhost:3000/pedidos", request);
      alert("Compra realizada com sucesso!");
      navigate(`/Success/getOne/${response.data.id}`);
    } catch (e) {
      console.log("Erro ao criar pedido", e);
      alert("Erro ao realizar a compra. Tente novamente.");
    }
  };

  return (
    <div className="body-confirm-container">
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
            <p className="title-my-info-page-confirm">Informações de Pagamento</p>
            <div className="inputs-radio-form-page-confirm">
              <div className="radios">
                <div className="radio-type">
                  <input type="radio" name="pagamento" /> <p>Cartão de Crédito</p>
                </div>
                <div className="radio-type">
                  <input type="radio" name="pagamento" /> <p>Cartão de Débito</p>
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
              R$ {total ? total.toFixed(2) : "0.00"}
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
          <CartSummary quantidade={quantidade} total={total} />
        </div>
      </div>
    </div>
  );
};
