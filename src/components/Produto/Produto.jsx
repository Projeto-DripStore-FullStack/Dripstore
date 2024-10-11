import KSwiss from "../../assets/KSwiss.png"
import "./Produto.css"

function Produto(){
  return(
    <div className="card-produto">
      <div className="product-board">
        <div className="product-discount">30% Off</div>
        <img src={KSwiss} alt="" className="product-image"/>
      </div>
      <p className="product-categoria">Tênis</p>
      <p className="product-nome">K-Swiss V8 - Masculino</p>
      <div className="product-preco">
        <p className="product-full">$ 200</p>
        <p className="product-oferta">$ 100</p>
      </div>
    </div>
  )
}

export default Produto