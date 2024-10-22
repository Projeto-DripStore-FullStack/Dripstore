import "./MyCart.css"
import WhiteNike5 from "../../assets/white-nike-5.png"

const MyCart = () => {
    return(
        <main className="my-cart">
            <div className="my-cart-topics">
                <p className="topic-mycart">MEU CARRINHO</p>
                <p className="topic-quantity">QUANTIDADE</p>
                <p className="topic-price">VALOR</p>
                <p className="topic-total">TOTAL</p>
            </div>
            <div className="my-cart-infos">
                <div className="cart-product">
                    <img src={WhiteNike5} alt="" />
                    <div>
                        <p className="cart-product-name">Tênis Nike Revolution 6 Next Nature Masculino</p>
                        <p className="cart-product-color"><span>Cor: </span>Vermelho / Branco</p>
                        <p className="cart-product-size"><span>Tamanho: </span>42</p>
                    </div>
                </div>
                <div className="cart-quantity">...</div>
                <div className="cart-unities">...</div>
                <div className="cart-total">...</div>
            </div>
            <div className="my-cart-discount-and-track">
                <div className="cart-coupon">
                    <form action="">
                        <p>Cupom de desconto</p>
                        <input type="text" placeholder="Insira seu código"/>
                        <button type="submit">OK</button>
                    </form>
                </div>
                <div className="cart-track">
                    <form action="">
                        <p>Calcular Frete</p>
                        <input type="text" placeholder="Insira seu CEP"/>
                        <button type="submit">OK</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default MyCart