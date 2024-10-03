import { MyCarousel } from "../../components/MyCarousel/MyCarousel";
import Footer from "../../components/Footer/Footer";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { Header } from "/src/components/Header/Header.jsx";
import { CardCollection } from "../../components/CardCollections/CardCollections";
// import starwars_tshirt from "../../assets/starwars_tshirt.png";
import pants from "../../assets/Pants.png";
import tshirt from "../../assets/Tshirt.png";
import headphones from "../../assets/Headphones.png";
import './style.css'
import OfertaEspecial from "../../components/OfertaEspecial/OfertaEspecial";

function Home() {
  return (
    <main>
      <LayoutPadrao>
        <Header />
        <MyCarousel />
        <br />
        <div
          style={{
            width: "100%",
            display: "block",
          }}
        >
          <h3 style={{ fontSize: "27px", color: "#474747" }}>
            Coleções em destaque
          </h3>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CardCollection
              id="card1"
              title="30% OFF"
              description="Novo Drop Supreme"
            />
            <CardCollection
              id="card2"
              title="30% OFF"
              description="Coleção Adidas"
            />
            <CardCollection
              id="card3"
              title="30% OFF"
              description="Novo Beat Bass"
            />
          </div>
        </div>
        <br />

        <div className="featuredCollections">
          <div>
            <h3 style={{ fontSize: "27px", color: "#474747" }}>Coleções em Destaque</h3>
          </div>
          <br />
          <div style={{display:"flex", justifyContent:"space-around", width:"50%"}}>
            <button className="btnCategoriesHome">
              <img src={pants} alt="" />
            </button>
            <button className="btnCategoriesHome">
              <img src={tshirt} alt="" />
            </button>
            <button className="btnCategoriesHome">
              <img src={pants} alt="" />
            </button>
            <button className="btnCategoriesHome">
              <img src={pants} alt="" />
            </button>
            <button className="btnCategoriesHome">
              <img src={headphones} alt="" />
            </button>
          </div>
        </div>
        <br />

        <OfertaEspecial/>
        <Footer />
      </LayoutPadrao>
    </main>
  );
}

export default Home;
