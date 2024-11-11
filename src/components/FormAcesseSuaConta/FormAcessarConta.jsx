import RedesSociaisDeAcesso from "../../assets/RedesSociaisDeAcesso.png";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./FormAcessarConta.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormAcessarConta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/usuarios/login",
        {
          email,
          password,
        }
      );

      console.log("Usuário autenticado:", response.data);

      // Armazene os dados do usuário no localStorage
      localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
      console.log("Dados do usuário armazenados:", response.data);
      

      navigate("/Home");
    } catch (error) {
      console.error("Erro ao acessar a conta:", error);
      alert(
        error.response?.data || "Erro ao acessar a conta. Tente novamente."
      );
    }
  };

  return (
    <div className="formAcessarContaBox">
      <h3 className="titleFormformAcessarConta">Acesse Sua Conta</h3>
      <p className="pFormformAcessarConta">
        Novo Cliente? Então registre-se{" "}
        <a className="aForm3" href="/Register">
          aqui.
        </a>
      </p>
      <form onSubmit={handleLogin}>
        <div className="divInputs">
          <InputParaForm
            label="Login*"
            placeholder="Insira seu login ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputParaForm
            label="Senha*"
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a className="aFormformAcessarConta" href="">
          Esqueci minha senha
        </a>
        <button type="submit" className="btnFormformAcessarConta">
          Acessar Conta
        </button>
      </form>
      <div className="divBaseFormformAcessarConta">
        <p className="pFormformAcessarConta">Ou faça Login Com</p>
        <img
          className="imgFormformAcessarConta"
          src={RedesSociaisDeAcesso}
          alt="Ícones de redes sociais"
        />
      </div>
    </div>
  );
};
