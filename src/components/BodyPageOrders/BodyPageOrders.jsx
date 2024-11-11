import "./BodyPageOrders.css";
import WhiteSneakers from "../../assets/White-Sneakers.png";

import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";
import { useParams } from "react-router-dom";

export const BodyPageOrders = () => {
  const { pedidoId } = useParams();
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPedidoById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pedidos/${pedidoId}`);
        setPedido(response.data);  
      } catch (error) {
        console.error("Erro ao buscar o pedido:", error);
        setError("Erro ao carregar os dados do pedido.");
      }
    };

    if (pedidoId) {
      getPedidoById();
    }
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
                <img className="imgBodyOrders" src={WhiteSneakers} alt="" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº {pedido.numeroPedido}</p>
                <h5 className="order">
                  {pedido.produto.nome}
                </h5>
              </div>
            </div>
            <div>
              <p className="statusOrderInTransit">{pedido.status}</p>
            </div>
          </div>

          <div className="individualOrderCar">
            <div className="div1IndividualOrderCar">
              <div className="imgBackGroundColor">
                <img className="imgBodyOrders" src={WhiteSneakers} alt="" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº 2234981932</p>
                <h5 className="order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h5>
              </div>
            </div>
            <div>
              <p className="statusOrderComplete">Finalizado</p>
            </div>
          </div>

          <div className="individualOrderCar">
            <div className="div1IndividualOrderCar">
              <div className="imgBackGroundColor">
                <img className="imgBodyOrders" src={WhiteSneakers} alt="" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº 2234981932</p>
                <h5 className="order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h5>
              </div>
            </div>
            <div className="divStatus">
              <p className="statusOrderCanceled">Cancelado</p>
            </div>
          </div>

          <div className="individualOrderCar">
            <div className="div1IndividualOrderCar">
              <div className="imgBackGroundColor">
                <img className="imgBodyOrders" src={WhiteSneakers} alt="" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº 2234981932</p>
                <h5 className="order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h5>
              </div>
            </div>
            <div>
              <p className="statusOrderComplete">Finalizado</p>
            </div>
          </div>

          <div className="lastIndividualOrderCar">
            <div className="div1IndividualOrderCar">
              <div className="imgBackGroundColor">
                <img className="imgBodyOrders" src={WhiteSneakers} alt="" />
              </div>
              <div className="divNumberAndOrder">
                <p className="orderNumber">Pedido nº 2234981932</p>
                <h5 className="order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h5>
              </div>
            </div>
            <div>
              <p className="statusOrderComplete">Finalizado</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
