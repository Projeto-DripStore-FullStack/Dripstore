    import RedesSociaisDeAcesso from "../../assets/RedesSociaisDeAcesso.png";
    import { InputParaForm } from "../InputParaForm/InputParaForm";
    import "./FormAcessarConta.css";

    export const FormAcessarConta = () => {
    return (
        <>
        <div className="formAcessarContaBox">
            <h3 className="titleFormformAcessarConta">Acesse Sua Conta</h3>
            <p className="pFormformAcessarConta">
            Novo Cliente? Então registre-se{" "}
            <a className="aForm3" href="/Register">
                aqui.
            </a>
            </p>
            <div className="divInputs">
            <InputParaForm
                label="Login*"
                placeholder="Insira seu login ou email"
            />
            <InputParaForm label="Senha*" placeholder="Insira sua senha" />
            </div>
            <a className="aFormformAcessarConta" href="">
            Esqueci minha senha
            </a>
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