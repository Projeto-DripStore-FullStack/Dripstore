import Footer from "../../components/Footer/Footer";
import { Topic } from "../../components/Topic/Topic";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { Hero } from "../../components/Hero/Hero";
import { Header } from "/src/components/Header/Header.jsx";
import { CardCollection } from "../../components/CardCollections/CardCollections";
import OfertaEspecial from "../../components/OfertaEspecial/OfertaEspecial";
import { Categories } from "../../components/Categories/Categories";
import { HighlightProduct } from "../../components/HighlightProducts/HighlightProduct";


function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <LayoutPadrao layoutType='home-page'>
        <Topic
          content = "Coleções em Destaque"
        />
        <CardCollection />
        <Topic
          content = "Categorias"
        />
        <Categories />
        <HighlightProduct/>
      </LayoutPadrao>
      <OfertaEspecial/>
      <Footer />
    </main>
  );
}

export default Home;
