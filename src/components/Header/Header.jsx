import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import Buy from "../../assets/Buy.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import LayoutPadrao from "../LayoutPadrao/LayoutPadrao";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="header-container">
      {menuOpen && (
        <div className="menu-mobile-modal">
          <div className="menu-mobile">
            <div className="menu-mobile-title">
              <h4>Páginas</h4>
            </div>
            <nav className="menu-mobile-links">
              <ul>
                <li><Link className="linkNavbarHeader">Home</Link></li>
                <li><Link className="linkNavbarHeader">Produtos</Link></li>
                <li><Link className="linkNavbarHeader">Categorias</Link></li>
                <li><Link className="linkNavbarHeader">Meus Pedidos</Link></li>
              </ul>
            </nav>
            <div className="menu-mobile-buttons">
              <Link className="linkRegister" to="/Register">
                Cadastre-se
              </Link>
              <Link to="/Login">
                <button className="loginButton">Entrar</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <div className="header-top-area">
        <button className="sandwitch-menu" onClick={toggleMenu}>
          {menuOpen ? (
            <span>&times;</span>
          ) : (
            <span>&#9776;</span>
          )}
          
        </button>
        <Link to="/">
          <img src={logo} alt="Logotipo digital store" className="logo-digital"/>
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
          
          <button className="searchBtn-mobile" onClick={toggleSearch}>
          {searchOpen ? (
            <img src={search} alt="botão de busca" />
          ) : (
            <img src={search} alt="botão de busca" />
          )}
        </button>
        
        </div>

        <Link className="linkRegister" to="/Register">
          Cadastre-se
        </Link>
        <Link to="/Login" className="btnLogin">
          <button className="loginButton">Entrar</button>
        </Link>
        <button className="buyButton">
          <img src={Buy} alt="" />
        </button>
      </div>
      {searchOpen && (<input
          type="text"
          placeholder="Pesquisar produto..."
          className="search-mobile"
        />
      )}
      <div className="header-bottom-area">
        <navbar className="navbarHeader">
          <ul className="menu-header">
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/">
                Home
              </Link>
            </li>
            <li className="LinkNavbar">
              <Link className="linkNavbarHeader" to="/ProductList">
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
