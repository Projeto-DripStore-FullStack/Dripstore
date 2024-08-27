import { Carousel } from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import { Header } from "/src/components/Header/Header.jsx";

function Home() {
  return (
    <main>
      <LayoutPadrao>
        <Header />
        <Carousel />
        <Footer />
      </LayoutPadrao>
    </main>
  );
}

export default Home;
