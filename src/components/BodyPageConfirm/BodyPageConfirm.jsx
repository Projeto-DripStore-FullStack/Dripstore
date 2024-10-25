import CartSummary from "../CartSummary/CartSummary";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./BodyPageConfirm.css";

export const BodyPageConfirm = () => {
  return (
    <>
      <div className="body-confirm-container">
        <div className="title-page-confirm">
          <h1>Finalizar Compra</h1>
        </div>
        <div className="div-forms-and-resume">
          <div className="forms-page-confirm">
            <div className="div-form-my-info">
              <div className="div-form-page-confirm">
                <p className="title-my-info-page-confirm">
                  Informações pessoais
                </p>
              </div>
              <div className="inputs-form-page-confirm">
                <InputParaForm
                  label="Nome Completo*"
                  placeholder="Insira seu nome"
                />
                <InputParaForm label="CPF*" placeholder="Insira seu CPF" />
                <InputParaForm
                  label="E-mail*"
                  placeholder="Insira seu login ou email"
                />
                <InputParaForm
                  label="Celular*"
                  placeholder="Insira seu celular"
                />
              </div>
            </div>
            <div className="div-form-my-adress">
              <div className="div-form-page-confirm">
                <p className="title-my-info-page-confirm">
                  Informações de Entrega
                </p>
              </div>
              <div className="inputs-form-page-confirm">
                <InputParaForm
                  label="Endereço*"
                  placeholder="Insira seu endereço"
                />
                <InputParaForm
                  label="Bairro *"
                  placeholder="Insira seu Bairro"
                />
                <InputParaForm
                  label="Cidade*"
                  placeholder="Insira sua Cidade"
                />
                <InputParaForm
                  label="Complemento"
                  placeholder="Insira seu Cep"
                />

                <InputParaForm label="CEP*" placeholder="Insira complemento" />
              </div>
            </div>

            <div className="div-form-my-paymant-info">
              <div className="div-form-page-confirm">
                <p className="title-my-info-page-confirm">
                  Informações de Pagamento
                </p>
              </div>
              <div className="inputs-radio-form-page-confirm">
                <div className="radios">
                  <div className="radio-type">
                    <input type="radio" /> <p>Cartão de Crédito</p>
                  </div>{" "}
                  <div className="radio-type">
                    <input type="radio" /> <p>Cartão de Débito</p>
                  </div>
                </div>

                <InputParaForm
                  label="Nome do Cartão*"
                  placeholder="Insira o nome do Cartão"
                />
                <div>
                  <InputParaForm
                    label="Número do cartão *"
                    placeholder="Insira o Número do cartão"
                  />
                  <InputParaForm
                    label="Data de validade*"
                    placeholder="Insira a data de validade"
                  />
                </div>
                <InputParaForm label="CVV" placeholder="Insira seu CVV" />
              </div>
            </div>
            <div className="div-form-my-paymant-info">
              <div className="div-form-page-confirm">
                <p className="title-my-info-page-confirm">Finalizar Compra</p>
              </div>
              <div className="form-sucesso-infoTotal">
                <p style={{ fontSize: "27px", fontWeight: "bold" }}>Total</p>
                <div
                  style={{
                    textAlign: "rigth",
                    display: "block",
                    justifyContent: "right",
                  }}
                >
                  <p style={{ fontSize: "27px", fontWeight: "bold" }}>
                    R$ 219,00
                  </p>
                  <p style={{ color: "rgba(143, 143, 143, 1)" }}>
                    ou 10x de R$ 21,00 sem juros
                  </p>
                </div>
              </div>
            </div>
            <button
              className="form-confirm-btn"
              onClick={() => (window.location.href = "/")}
            >
              Realizar Pagamento
            </button>
          </div>

          <div className="resume">
            <CartSummary />
          </div>
        </div>
      </div>
    </>
  );
};
