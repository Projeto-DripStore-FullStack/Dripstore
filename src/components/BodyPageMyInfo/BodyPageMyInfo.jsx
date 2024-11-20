import { useEffect, useState } from "react";
import axios from "axios";
import "./BodyPageMyInfo.css";
import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";

export const BodyPageMyInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/usuarios/getOne/${usuarioLogado.id}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="bodyMyMyInfo">
      <SideMenuOrders />
      <div className="divViewMyInfoCar">
        <div className="divViewMyInfoCarTitle">
          <p className="viewMyInfoCarTitle">Meus Pedidos</p>
          <a className="viewMyInfoCarLinks" href="/Cart">Editar</a>
        </div>

        <div className="div-my-personal-info">
          <p style={{ marginBottom: "8px" }}>
            <strong>Informações Pessoais</strong>
          </p>
          {userInfo ? (
            <>
              <p style={{ marginBottom: "8px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>CPF:</span> {userInfo.cpf}
              </p>
              <p style={{ marginBottom: "8px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span> {userInfo.email}
              </p>
              <p style={{ marginBottom: "8px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Nome:</span> {userInfo.nome}
              </p>
              <p style={{ marginBottom: "8px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Celular:</span> {userInfo.celular}
              </p>
            </>
          ) : (
            <p>Carregando informações...</p>
          )}
        </div>

        <div className="div-my-adress-info">
          <p style={{ marginBottom: "4px" }}>
            <strong>Informações de Entrega</strong>
          </p>
          {userInfo ? (
            <>
              <p style={{ marginBottom: "4px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Endereço:</span> {userInfo.endereco}
              </p>
              <p style={{ marginBottom: "4px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Bairro:</span> {userInfo.bairro}
              </p>
              <p style={{ marginBottom: "4px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>Cidade:</span> {userInfo.cidade}, {userInfo.estado}
              </p>
              <p style={{ marginBottom: "4px" }}>
                <span style={{ color: "rgba(143, 143, 143, 1)" }}>CEP:</span> {userInfo.cep}
              </p>
            </>
          ) : (
            <p>Carregando informações de entrega...</p>
          )}
        </div>
      </div>
    </div>
  );
};
