import RedesSociaisDeAcesso from "../../assets/RedesSociaisDeAcesso.png";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./FormAcessarConta.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormAcessarConta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/usuarios/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("id", response.data.id);

      // Exibir mensagem de sucesso
      toast.success("Login realizado, seja bem-vindo!");

      // Redirecionar após um curto atraso
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    } catch (error) {
      console.error("Erro ao acessar a conta:", error);
      toast.error(
        error.response?.data || "Erro ao acessar a conta. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formAcessarContaBox">
      {loading && (
        <div className="overlay">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} />

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
        <button
          type="submit"
          className="btnFormformAcessarConta"
          disabled={loading}
        >
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
