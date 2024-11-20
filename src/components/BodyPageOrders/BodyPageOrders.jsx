import axios from "axios";
import { useEffect, useState } from "react";
import WhiteSneakers from "../../assets/White-Sneakers.png";
import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";
import "./BodyPageOrders.css";

export const BodyPageOrders = () => {
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const usuario_id = localStorage.getItem("id");

    if (usuario_id) {
      axios
        .get(`http://localhost:3000/pedidos/getOne/${usuario_id}`)
        .then((response) => setPedido(response.data))
        .catch((error) => console.error("Erro ao buscar pedidos:", error));
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!pedido) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bodyMyOrders">
      <SideMenuOrders />
      <div className="divViewOrdersCar">
        <div className="individualOrderCar">
          <div className="imgBackGroundColor">
            <img
              className="imgBodyOrders"
              src={WhiteSneakers}
              alt="Tênis Branco"
            />
          </div>
          <div className="divNumberAndOrder">
            <p className="orderNumber">Pedido nº {pedido.numeroPedido}</p>
            <h5 className="order">
              {pedido.produtos && pedido.produtos.length > 0
                ? pedido.produtos
                    .map((produtoPedido) => produtoPedido.produto?.title)
                    .join(", ")
                : "Produtos indisponíveis"}
            </h5>
          </div>
          <div>
            <p
              className={`statusOrder ${
                pedido.status === "Finalizado"
                  ? "statusOrderComplete"
                  : "statusOrderInTransit"
              }`}
            >
              {pedido.status || "Status não disponível"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
