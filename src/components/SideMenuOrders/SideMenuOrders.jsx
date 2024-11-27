import "./SideMenuOrders.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SideMenuOrders = () => {
  const [active, setActive] = useState(null);
  const [usuarioId, setUsuarioId] = useState(null); // Estado para armazenar o ID do usuário
  const location = useLocation();

  useEffect(() => {
    const id = localStorage.getItem("id"); // Supondo que o ID do usuário esteja armazenado no localStorage após o login
    if (id) {
      setUsuarioId(id); // Definir o ID do usuário
    }
  }, []);

  const handleClick = (linkName) => {
    setActive(linkName);
  };

  return (
    <div className="side-menu-container">
      <div className="link-container">
        <Link
          // to="/Profile"
          className={`
              link-side-menu 
              ${active === "Profile" ? "active" : ""}
              ${location.pathname === "/Profile" ? "active" : ""}
            `}
          onClick={() => handleClick("Profile")}
        >
          Meu Perfil
        </Link>
      </div>
      <div className="link-container">
        {/* Verifique se o usuarioId está disponível antes de gerar o link */}
        {usuarioId && (
          <Link
            to={`/Orders`}
            className={`
                link-side-menu 
                ${active === "Orders" ? "active" : ""}
                ${location.pathname === `/Orders` ? "active" : ""}
              `}
            onClick={() => handleClick("Orders")}
          >
            Meus Pedidos
          </Link>
        )}
      </div>
      <div className="link-container">
        <Link
          to="/MyInfo"
          className={`
              link-side-menu 
              ${active === "MyInfo" ? "active" : ""}
              ${location.pathname === "/MyInfo" ? "active" : ""}
            `}
          onClick={() => handleClick("MyInfo")}
        >
          Minhas Informações
        </Link>
      </div>
      <div className="link-container">
        <Link
          // to="/Payments"
          className={`
              link-side-menu
              ${active === "Payments" ? "active" : ""}
              ${location.pathname === "/Payments" ? "active" : ""}
            `}
          onClick={() => handleClick("Payments")}
        >
          Métodos de Pagamentos
        </Link>
      </div>
    </div>
  );
};
