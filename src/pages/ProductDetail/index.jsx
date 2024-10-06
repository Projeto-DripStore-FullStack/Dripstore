import { Header } from "/src/components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer"
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import Produto from "../../components/Produto/Produto";
import { useState } from "react";


function ProductDetail(){
  const [mainImage, setMainImage] = useState('')

  return(
    <main>
      <Header/>
      <LayoutPadrao layoutType="product-detail">
                
      </LayoutPadrao>
      <Footer/>
    </main>
  )
}

export default ProductDetail