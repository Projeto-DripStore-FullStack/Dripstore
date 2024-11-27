import axios from "axios";
import { useEffect, useState } from "react";
import WhiteSneakers from "../../assets/White-Sneakers.png";
import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";
import "./BodyPageOrders.css";

export const BodyPageOrders = () => {
  const [pedidos, setPedidos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const usuarioId = localStorage.getItem("id");

    if (!usuarioId) {
      console.error("Usuário não está logado ou ID não foi encontrado.");
      setError("Usuário não autenticado.");
      return;
    }

    axios
      .get(`http://localhost:3000/pedidos`)
      .then((response) => {
        // Filtrar apenas pedidos do usuário logado
        const pedidosUsuario = response.data.filter(
          (pedido) => pedido.usuario_id === parseInt(usuarioId)
        );
        setPedidos(pedidosUsuario);
      })
      .catch((error) => {
        console.error("Erro ao buscar pedidos:", error);
        setError("Erro ao carregar pedidos.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!pedidos.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bodyMyOrders">
      <SideMenuOrders />
      <div className="divViewOrdersCar">
        {pedidos.map((pedido) => (
          <div className="individualOrderCar" key={pedido.id}>
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
        ))}
      </div>
    </div>
  );
};
