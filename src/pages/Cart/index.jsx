import ProductRelatedGallery from "../../components/ProductRelatedGallery/ProductRelatedGallery";
import { Header } from "/src/components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";
import MyCart from "../../components/MyCart/MyCart";
import CartSummary from "../../components/CartSummary/CartSummary";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";

function Cart(){
  return(
    <>
      <Header/>
      <LayoutPadrao layoutType="cart-page">
        <MyCart/>
        <CartSummary/>
        <ProductRelatedGallery/>
      </LayoutPadrao>
      <Footer/>
    </>
  )
}

export default Cart