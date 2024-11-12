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

  const getPedidoById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/pedidos/getOne/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o pedido:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPedido = async () => {
      const idToFetch = pedidoId || 1;  // Usa o pedidoId se disponível, senão usa o ID 1
      const pedidoData = await getPedidoById(idToFetch);

      if (pedidoData) {
        setPedido(pedidoData);
      } else {
        setError("Erro ao carregar os dados do pedido.");
      }
    };

    fetchPedido();
  }, [pedidoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!pedido) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="bodyMyOrders">
        <SideMenuOrders />
        <div className="divViewOrdersCar">
          <div className="divViewOrdersCarTitle">
            <p className="viewOrdersCarTitle">Meus Pedidos</p>
            <p className="viewOrdersCarName">STATUS</p>
          </div>
          <div className="individualOrderCar">
            <div className="div1IndividualOrderCar">
              <div className="imgBackGroundColor">
                <img className="imgBodyOrders" src={WhiteSneakers} alt="Tênis Branco" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº {pedido.numeroPedido}</p>
                <h5 className="order">
                  {pedido.produtos && pedido.produtos.length > 0
                    ? pedido.produtos.map((produto) => produto.produto?.nome).join(', ')
                    : "Produtos indisponíveis"}
                </h5>
              </div>
            </div>
            <div>
              <p className={`statusOrder ${pedido.status === "Finalizado" ? 'statusOrderComplete' : 'statusOrderInTransit'}`}>
                {pedido.status || "Status não disponível"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
