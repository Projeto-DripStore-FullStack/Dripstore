import "./BodyPageOrders.css";
import WhiteSneakers from "../../assets/White-Sneakers.png";

import { SideMenuOrders } from "../SideMenuOrders/SideMenuOrders";

export const BodyPageOrders = () => {
  return (
    <>
      <div className="bodyMyOrders">
        <SideMenuOrders/>
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
                <p className="orderNumber">Pedido nº 2234981932</p>
                <h5 className="order">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h5>
              </div>
            </div>
            <div>
              <p className="statusOrderInTransit">Produto em trânsito</p>
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
