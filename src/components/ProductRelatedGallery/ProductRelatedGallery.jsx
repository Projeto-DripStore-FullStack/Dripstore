import "./ProductRelatedGallery.css"
import { Link } from "react-router-dom"
import Produto from "../Produto/Produto"


const ProductRelatedGallery = () => {
    return(
        <main className="product-related-gallery">
            <div className="product-related-header">
                <h2>Produtos Relacionados</h2>
                <Link>Ver todos</Link>
            </div>
            <div className="product-related-products">
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
            </div>
        </main>
    )
}

export default ProductRelatedGallery