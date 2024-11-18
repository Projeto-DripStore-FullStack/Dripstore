import axios from "axios";
import "./BodyPageOrders.css";
import WhiteSneakers from "../../assets/White-Sneakers.png";
import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BodyPageOrders = () => {
  const { pedidoId } = useParams();
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState(null);

  const getPedidoById = async (id, userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/pedidos/getOne/${id}`
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o pedido:", error);
      return null;
    }
  };

  useEffect(() => {
    const usuarioId = localStorage.getItem("id");

    if (usuarioId) {
      axios
        .get(`http://localhost:3000/pedidos/getOne/${usuarioId}`)
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
