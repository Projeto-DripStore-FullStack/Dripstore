import RedesSociaisDeAcesso from "../../assets/RedesSociaisDeAcesso.png";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./FormCrieSuaConta.css";

export const FormCrieSuaConta = () => {
  return (
    <>
      <div className="formAcessarContaBox">
        <h3 className="titleFormformAcessarConta">Crie Sua Conta</h3>
        <p className="pFormformAcessarConta">
          Já possui uma conta? Então entre{" "}
          <a className="aForm3" href="/CreateAccount">
            aqui.
          </a>
        </p>
        <div className="divInputs">
          <InputParaForm
            label="Email*"
            placeholder="Insira seu login ou email"
          />
        </div>
        <button className="btnFormformAcessarConta">Acessar Conta</button>
        <div className="divBaseFormformAcessarConta">
          <p className="pFormformAcessarConta">Ou faça Login Com</p>
          <img
            className="imgFormformAcessarConta"
            src={RedesSociaisDeAcesso}
            alt="Ícones de redes sociais"
          />
        </div>
      </div>
    </>
  );
};
