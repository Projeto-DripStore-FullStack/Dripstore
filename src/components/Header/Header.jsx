import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import Buy from "../../assets/Buy.png";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
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
        <Link to="/Login">
          <button className="loginButton">Entrar</button>
        </Link>
        <button className="buyButton">
          <img src={Buy} alt="" />
        </button>
      </div>
      <div className="divFilho2Header">
        <navbar className="navbarHeader">
          <ul className="menu-header">
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/">
                Home
              </Link>
            </li>
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/Products">
                Produtos
              </Link>
            </li>
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/Categories">
                Categorias
              </Link>
            </li>
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/Orders">
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </navbar>
      </div>
    </header>
  );
};
