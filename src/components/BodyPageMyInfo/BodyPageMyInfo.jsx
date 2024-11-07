import "./BodyPageMyInfo.css";

import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";

export const BodyPageMyInfo = () => {
  return (
    <>
      <div className="bodyMyMyInfo">
        {/* <div className="sideBarMenu">
          <div className="divLinkToPagesMyInfo">
            <a className="linkToPagesMyInfo" href="">
              Meu Perfil
            </a>
          </div>
          <br />
          <div className="divLinkToPagesMyInfo">
            <a className="linkToPagesMyInfo" href="/MyInfo">
              Meus Pedidos
            </a>
          </div>
          <br />
          <div className="divLinkToPagesMyInfo">
            <a className="linkToPagesMyInfo" href="/MyInfo">
              Minhas Informações
            </a>
          </div>
          <br />
          <div className="lastDivLinkToPagesMyInfo">
            <a className="linkToPagesMyInfo" href="">
              Métodos de Pagamento
            </a>
          </div>
        </div> */}
        <SideMenuOrders />

        <div className="divViewMyInfoCar">
          <div className="divViewMyInfoCarTitle">
            <p className="viewMyInfoCarTitle">Meus Pedidos</p>
            <a className="viewMyInfoCarLinks" href="/Cart">
              Editar
            </a>
          </div>

          <div className="div-my-personal-info">
            <p style={{ marginBottom: "8px" }}>
              <strong>Informações Pessoais</strong>
            </p>
            <p style={{ marginBottom: "8px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>CPF:</span>{" "}
              123485913-35
            </p>
            <p style={{ marginBottom: "8px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Email:</span>{" "}
              francisco@gmail.com
            </p>
            <p style={{ marginBottom: "8px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Nome:</span>{" "}
              Francisco Antonio Pereira
            </p>
            <p style={{ marginBottom: "8px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Celular:</span>{" "}
              (85) 5555-5555
            </p>
          </div>

          <div className="div-my-adress-info">
            <p style={{ marginBottom: "4px" }}>
              <strong> Informações de Entrega</strong>
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Celular:</span>{" "}
              Endereço: Rua João Pessoa, 333
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Bairro:</span>{" "}
              Centro
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>Cidade:</span>{" "}
              Fortaleza, Ceará
            </p>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ color: "rgba(143, 143, 143, 1)" }}>CEP:</span>{" "}
              433-8800
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
