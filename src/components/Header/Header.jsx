import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import Buy from "../../assets/Buy.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

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
        <Link to="/Home">
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
        <div className="my-cart-modal">
          <h4 className="cart-modal-title">Meu carrinho</h4>
          <div className="cart-products">
            <div className="cart-product">
              <div className="cart-product-img">
                 <img src="" alt="" />
              </div>
              <div>
                <h4 className="cart-product-description">Tênis Nike Revolution 6 Next Nature Masculino</h4>
                <div className="cart-product-price">
                  <h3>R$ 219,00</h3>
                  <p>R$ 219,00</p>
                </div>
              </div>
            </div>
            <div className="cart-product">
              <div className="cart-product-img">
                 <img src="" alt="" />
              </div>
              <div>
                <h4 className="cart-product-description">Tênis Nike Revolution 6 Next Nature Masculino</h4>
                <div className="cart-product-price">
                  <h3>R$ 219,00</h3>
                  <p>R$ 219,00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="total-cart-value">
              <h4>Valor Total:</h4>
              <h4>R$ 219,00</h4>
            </div>
            <div>
              <Link>Esvaziar</Link>
              <button>Ver Carrinho</button>
            </div>
        </div>
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
              <Link className="linkNavbarHeader" to="/Home">
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
