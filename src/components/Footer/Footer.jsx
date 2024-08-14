import "./Footer.css";
import WhiteLogo from "../../assets/white_logo.png";
import facebookIcon from "../../assets/facebookIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="divPaiFooter">
          <div className="divFilhoFooterColuna1">
            <img src={WhiteLogo} alt="Logo" />
            <p className="divFilhoColuna1Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="contactsLogos">
              <a className="linkIcons" href="">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a className="linkIcons" href="">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a className="linkIcons" href="">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="divColunas">
            <nav className="divFilhoColuna2">
              <h3 className="subtitle">Informação</h3>
              <br />
              <ul>
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus Pedidos</li>
              </ul>
            </nav>
            <nav className="divFilhoColuna3">
              <h3>Categorias</h3>
              <br />
              <ul>
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </nav>
            <address className="divFilhoColuna4">
              <h3>Contato</h3>
              <br />
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p>(85)3501-3411</p>
            </address>
          </div>
        </div>
        <hr className="hrFooter" />
        <p className="divFilhoColuna2Texto2">© 2022 Digitall College</p>
      </footer>
    </>
  );
}

export default Footer;
