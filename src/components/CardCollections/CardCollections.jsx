import "./CardCollections.css";
import CamisetaStarwars from "../../assets/CamisetaStarwars.png";
import BlackSneakers from "../../assets/BlackSneakers.png";
import Headphone from "../../assets/Headphone.png";

export const CardCollection = (props) => {
  return (
    <>
      <div className="card" id={props.id}>
        <div className="card-content">
          <p className="cardTitle">{props.title}</p>
          <div className="divCardDescription">
            <h3 className="cardDescription">{props.description}</h3>
          </div>
          <button className="cardBtn">Comprar</button>
        </div>
      </div>
    </>
  );
};
