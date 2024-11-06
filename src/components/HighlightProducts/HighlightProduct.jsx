import Produto from "../Produto/Produto";
import './HighlightProduct.css'
import { Link } from "react-router-dom";

export const HighlightProduct = () => {
  return(
    
    <div className="highlight-product-container">
      <div className="product-highlights-header">
          <h3>Produtos em Destaque</h3>
          <Link>Ver todos</Link>
      </div>
      <div className="product-highlights-gallery">
        <Produto/>
      </div>
    </div>
  )
}