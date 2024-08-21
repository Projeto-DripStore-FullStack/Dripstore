import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import Buy from "../../assets/Buy.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="divPaiHeader">
      <div className="divFilho1Header">
        <Link to="/">
          <img src={logo} alt="Logotipo digital store" />
        </Link>
        <div className="divInputSearchHeader">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="headerSearchInput"
          />
          <button className="searchButton">
            <img src={search} alt="botão de busca" />
          </button>
        </div>

        <Link className="linkRegister" to="/Register">
          Cadastre-se
        </Link>
        <button className="loginButton">Entrar</button>
        <button className="buyButton">
          <img src={Buy} alt="" />
        </button>
      </div>
      <div className="divFilho2Header">
        <navbar className="navbarHeader">
          <a className="aLinkNavbar">
            <Link className="linkNavbarHeader" to="/">
              Home
            </Link>
          </a>
          <a className="aLinkNavbar">
            <Link className="linkNavbarHeader" to="/Products">
              Produtos
            </Link>
          </a>
          <a className="aLinkNavbar">
            <Link className="linkNavbarHeader" to="/Categories">
              Categorias
            </Link>
          </a>
          <a className="aLinkNavbar">
            <Link className="linkNavbarHeader" to="/Orders">
              Meus Pedidos
            </Link>
          </a>
        </navbar>
      </div>
    </header>
  );
}

export default Header;
