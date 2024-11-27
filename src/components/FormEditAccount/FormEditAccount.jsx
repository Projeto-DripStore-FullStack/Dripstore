import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputParaForm } from "../InputParaForm/InputParaForm";
import "./FormEditAccount.css";

export const FormEditAccount = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    password: "",
    endereco: "",
    bairro: "",
    cidade: "",
    complemento: "",
    cep: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioId = localStorage.getItem("id");
    if (usuarioId) {
      axios
        .get(`http://localhost:3000/usuarios/getOne/${usuarioId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    } else {
      console.log("Usuário não encontrado, ID não disponível.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:3000/usuarios/getOne/${usuarioId}`,
        formData
      );
      console.log("Conta Editada com sucesso:", response.data);
      setSuccessMessage("Conta atualizada com sucesso!");
      setTimeout(() => {
        navigate("/MyInfo");
      }, 4000);
    } catch (error) {
      console.error("Erro ao atualizar conta:", error);
      alert("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`body-create-account-container ${loading ? 'loading' : ''}`}>
      {successMessage && (
        <p className="success-message alert alert-success position-fixed top-0 end-0 m-3">{successMessage}</p>
      )}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}
      <form className="forms-page-create-account" onSubmit={handleSubmit}>
        <h1>Edite Sua Conta</h1>
        <div className="div-form-my-info">
          <p className="title-my-info-page-create-account">Informações pessoais</p>
          <div className="inputs-form-page-create-account">
            <InputParaForm
              label="Nome Completo*"
              placeholder="Insira seu nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <InputParaForm
              label="CPF*"
              placeholder="Insira seu CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
            <InputParaForm
              label="E-mail*"
              placeholder="Insira seu login ou email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputParaForm
              label="Telefone*"
              placeholder="Insira seu telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <InputParaForm
              label="Senha*"
              placeholder="Insira sua senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
            />
          </div>
        </div>
        <div className="div-form-my-address">
          <p className="title-my-info-page-create-account">Informações de Entrega</p>
          <div className="inputs-form-page-create-account">
            <InputParaForm
              label="Endereço*"
              placeholder="Insira seu endereço"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
            <InputParaForm
              label="Bairro *"
              placeholder="Insira seu Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            <InputParaForm
              label="Cidade*"
              placeholder="Insira sua Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <InputParaForm
              label="Complemento"
              placeholder="Insira complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
            />
            <InputParaForm
              label="CEP*"
              placeholder="Insira seu CEP"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="form-create-account-btn" disabled={loading}>
            Editar Conta
          </button>
        </div>
      </form>
    </div>
  );
};
