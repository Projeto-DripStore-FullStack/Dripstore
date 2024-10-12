import "./CardCollections.css";
import { Card } from "./Card/Card";
import CamisetaStarwars from "../../assets/CamisetaStarwars.png";
import BlackSneakers from "../../assets/BlackSneakers.png";
import Headphone from "../../assets/Headphone.png";

export const CardCollection = () => {
  return (
    <div className="card-collection">
      <Card 
        title = '30% OFF'
        description = 'Novo Drop Supreme'
        img = {CamisetaStarwars}
      />
      <Card 
        title = '30% OFF'
        description = 'Coleção Adidas'
        img = {BlackSneakers}
      />
      <Card 
        title = '30% OFF'
        description = 'Novo Beats Bass'
        img = {Headphone}
      />
    </div>
  );
};
