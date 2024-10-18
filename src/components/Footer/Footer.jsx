import "./Footer.css";
import WhiteLogo from "../../assets/white_logo.png";
import facebookIcon from "../../assets/facebookIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="first-section-footer">
            <img src={WhiteLogo} alt="" className="footer-logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptate modi cumque ea accusantium, ullam unde consectetur libero ipsa ipsam incidunt exercitationem quae doloremque? Velit tempora excepturi sed corrupti doloribus.</p>
            <div className="social">
              <img src={facebookIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={twitterIcon} alt="" />
            </div>
          </div>
          <div className="second-section-footer">
            <h3>Informação</h3>
            <ul>
              <li>
                <Link className="link-footer">Sobre Drip Store</Link>
              </li>
              <li>
                <Link className="link-footer">Segurança</Link>
              </li>
              <li>
                <Link className="link-footer">Wishlist</Link>
              </li>
              <li>
                <Link className="link-footer">Blog</Link>
              </li>
              <li>
                <Link className="link-footer">Trabalhe conosco</Link>
              </li>
              <li>
                <Link className="link-footer">Meus Pedidos</Link>
              </li>
            </ul>
          </div>
          <div className="third-section-footer">
            <h3>Categorias</h3>
            <ul>
              <li>
                <Link className="link-footer">Camisetas</Link>
              </li>
              <li>
                <Link className="link-footer">Calças</Link>
              </li>
              <li>
                <Link className="link-footer">Bonés</Link>
              </li>
              <li>
                <Link className="link-footer">Headphones</Link>
              </li>
              <li>
                <Link className="link-footer">Tênis</Link>
              </li>
            </ul>
          </div>
          <div className="fourth-section-footer">
            <h3>Contato</h3>
            <ul>
              <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
              </li>
              <li>
              (85) 3051-3411
              </li>
            </ul>
          </div>
        </div>
        <div className="rights">
          <p>2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
