import logo from "../../assets/logo.png";
import search from "../../assets/Search.png";
import Buy from "../../assets/Buy.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ModalCart } from "./ModalCart/ModalCart";
import "./Header.css";
import axios from "axios"; // Importar axios para fazer a requisição

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [numeroPedido, setNumeroPedido] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const [isModalCartVisible, setModalCartVisible] = useState(false);

  const showModalCart = () => setModalCartVisible(true);
  const hideModalCart = () => setModalCartVisible(false);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const quantidade = carrinho.reduce(
      (acc, item) => acc + item.quantidade,
      0
    );
    setQuantidadeTotal(quantidade);
  }, [isModalCartVisible]);

  useEffect(() => {
    // Recuperar o id do usuário do localStorage
    const usuarioId = localStorage.getItem("id");
    if (usuarioId) {
      // Fazer a requisição para buscar o pedido do usuário
      axios
        .get(`http://localhost:3000/usuarios/getOne/${usuarioId}`) // Ajuste para a sua API
        .then((response) => {
          const pedido = response.data;
          if (pedido) {
            setNumeroPedido(pedido.numeroPedido); // Atualizar o número do pedido
            setUsuario(pedido);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar o número do pedido:", error);
        });
    }
  }, []); // Apenas roda uma vez após o componente ser montado

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
                <li>
                  <Link className="linkNavbarHeader">Home</Link>
                </li>
                <li>
                  <Link className="linkNavbarHeader">Produtos</Link>
                </li>
                <li>
                  <Link className="linkNavbarHeader">Categorias</Link>
                </li>
                <li>
                  <Link className="linkNavbarHeader">Meus Pedidos</Link>
                </li>
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
          {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
        <Link to="/Home">
          <img
            src={logo}
            alt="Logotipo digital store"
            className="logo-digital"
          />
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
        {usuario ? (
          <span>Olá, {usuario.nome}!</span>
        ) : (
          <>
            <Link className="linkRegister" to="/Register">
              Cadastre-se
            </Link>
            <Link to="/Login" className="btnLogin">
              <button className="loginButton">Entrar</button>
            </Link>
          </>
        )}
        <button
          className="buyButton"
          onClick={() => setModalCartVisible(!isModalCartVisible)}
        >
          <img src={Buy} alt="" />
          <span className="badge bg-danger">{quantidadeTotal}</span>
        </button>
        {isModalCartVisible && <ModalCart />}
      </div>

      {searchOpen && (
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="search-mobile"
        />
      )}

      <div className="header-bottom-area">
        <nav className="navbarHeader">
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
              <Link className="linkNavbarHeader" >
                Categorias
              </Link>
            </li>
            <li className="LinkNavbar">
              <Link
                className="linkNavbarHeader"
                to={`/Orders`}
              >
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
