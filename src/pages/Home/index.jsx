import Footer from "../../components/Footer/Footer";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { Hero } from "../../components/Hero/Hero";
import { Header } from "/src/components/Header/Header.jsx";
import { CardCollection } from "../../components/CardCollections/CardCollections";
import './style.css'
import OfertaEspecial from "../../components/OfertaEspecial/OfertaEspecial";

function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <LayoutPadrao layoutType='home'>
        <CardCollection
          id = ''
          title = '30% OFF'
          description = 'Novo Drop Supreme'
        />
        <CardCollection
          id = ''
          title = '30% OFF'
          description = 'Coleção Adidas'
        />
        <CardCollection
          id = ''
          title = '30% OFF'
          description = 'Novo Beats Bass'
        />
      </LayoutPadrao>
      <OfertaEspecial/>
      <Footer />
    </main>
  );
}

export default Home;
