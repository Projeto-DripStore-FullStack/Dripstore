import logo from "../../assets/logo.png"
import search from "../../assets/Search.png"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return(
    <header className="">
      <div>
        <Link to="/">
          <img src={logo} alt="Logotipo digital store" />
        </Link>
        <input type="text" name="" className=""/>
        <img src={search} alt="botão de busca"/>
        <Link to="/Register">Cadastre-se</Link>
        <button>Entrar</button>
      </div>
      <div>
        <ul>
          <Link to="/"><li className="">Home</li></Link>
          <Link to="/Products"><li className="">Produtos</li></Link>
          <Link to="/Categories"><li className="">Categorias</li></Link>
          <Link to="/Orders"><li className="">Meus Pedidos</li></Link>
        </ul>
      </div>
    </header>
  )
}

export default Header