import './ModalCart.css'
import sneaker from '../../../assets/white-nike-5.png';
import { Link } from 'react-router-dom';

export function ModalCart() {
  return (
    <div className="my-cart-modal">
      <h4 className="cart-modal-title">Meu carrinho</h4>
      <div className="cart-modal-products">
        <div className="cart-modal-product">
          <div className="cart-modal-product-img">
            <img src={sneaker} alt="" />
            <h4 className="cart-modal-product-description">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h4>
          </div>
          <div className="cart-modal-product-price">
            <h3>R$ 219,00</h3>
            <p>R$ 219,00</p>
          </div>
        </div>
        <div className="cart-modal-product">
          <div className="cart-modal-product-img">
            <img src={sneaker} alt="" />
            <h4 className="cart-modal-product-description">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h4>
          </div>
          <div className="cart-modal-product-price">
            <h3>R$ 219,00</h3>
            <p>R$ 219,00</p>
          </div>
        </div>
      </div>
      <div className="total-modal-cart-value">
        <h4>Valor Total:</h4>
        <h4>R$ 219,00</h4>
      </div>
      <div className="cart-modal-actions">
        <Link className="empty-cart">Esvaziar</Link>
        <button>Ver Carrinho</button>
      </div>
    </div>
  );
}
