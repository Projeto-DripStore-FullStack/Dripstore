import "./Hero.css";
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";
import Ornament from "../../assets/Ornament.png";
export default function Hero() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <p id="title-amarelo">Melhores ofertas personalizadas</p>
          <h1>Queima de estoque Nike🔥</h1>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button type="button">Ver ofertas</button>
        </div>
        <div >
          <img className="banner-image" src={TenisNike} alt="" />
        </div>
        <img src={Ornament} id="ornament" />
      </div>
    </section>
  );
}
