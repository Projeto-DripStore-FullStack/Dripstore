import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./FormCreateAccount.css";

export const FormCreateAccount = () => {
  return (
    <>
      <div className="body-create-account-container">
        <div className="forms-page-create-account">
          <h1>Crie Sua Conta</h1>
          <div className="div-form-my-info">
            <div className="div-form-page-create-account">
              <p className="title-my-info-page-create-account">
                Informações pessoais
              </p>
            </div>
            <div className="inputs-form-page-create-account">
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
            <div className="div-form-page-create-account">
              <p className="title-my-info-page-create-account">
                Informações de Entrega
              </p>
            </div>
            <div className="inputs-form-page-create-account">
              <InputParaForm
                label="Endereço*"
                placeholder="Insira seu endereço"
              />
              <InputParaForm label="Bairro *" placeholder="Insira seu Bairro" />
              <InputParaForm label="Cidade*" placeholder="Insira sua Cidade" />
              <InputParaForm label="Complemento" placeholder="Insira seu Cep" />

              <InputParaForm label="CEP*" placeholder="Insira complemento" />
            </div>
          </div>

          <div>
            <div className="input-checkbox-create-account">
              <input type="checkbox" name="" id="checkbox" />{" "}
              <span>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode variar de acordo com a
                interação do cliente.
              </span>
            </div>
            <button
              className="form-create-account-btn"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
