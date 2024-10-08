import { Header } from "/src/components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer"
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import Produto from "../../components/Produto/Produto";
import { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import ProductDetailGallery from "../../components/ProductDetailGallery/ProductDetailGallery";
import ProductDetailDescription from "../../components/ProductDetailDescription/ProductDetailDescription";
import ProductRelatedGallery from "../../components/ProductRelatedGallery/ProductRelatedGallery";


function ProductDetail(){
  return(
    <main>
      <Header/>
      <LayoutPadrao layoutType="product-detail">
        <Breadcrumb/>
        <ProductDetailGallery/>
        <ProductDetailDescription/>
        <ProductRelatedGallery/>
      </LayoutPadrao>
      <Footer/>
    </main>
  )
}

export default ProductDetail