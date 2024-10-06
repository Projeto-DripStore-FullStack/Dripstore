import { Header } from "/src/components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer"
import { AsideFilter } from "../../components/AsideFilter/AsideFilter";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import Produto from "../../components/Produto/Produto";

function ProductList (){
    return (
        <> 
            <Header/>
            <LayoutPadrao layoutType="product-list">
                <AsideFilter/>
                <Produto/>
            </LayoutPadrao>
            <Footer/> 
        </>
    )
}

export default ProductList