import "./OfertaEspecial.css";
import AirJordansHP from "../../assets/AirJordansHP.png";
import LayoutPadrao from "../LayoutPadrao/LayoutPadrao";

function OfertaEspecial() {
  return (
    <>
        <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"white"}}>
          <div className="imgAirJordan">
            <img className="imgTenisAirJordan" src={AirJordansHP} alt="" />
          </div>
          <div className="textoOfertaEspecial">
            <h4 className="titleOfertaEspecial">Oferta especial</h4>
            <h2 className="titleOfertaEspecial2">
              Air Jordan edição de colecionador
            </h2>
            <p className="subTitleOfertaEspecial">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Vitae,
              non reprehenderit quae perspiciatis ipsa expedita voluptas
              tempora, temporibus ad minima repellendus corrupti. Illo alias
              doloremque ex id quas corporis tempora, tempore vel.
            </p>
            <button className="btnOfertaEspecial">Ver Oferta</button>
          </div>
        </div>
    </>
  );
}

export default OfertaEspecial;
