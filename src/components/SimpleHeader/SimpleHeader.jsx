import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import LayoutPadrao from "../LayoutPadrao/LayoutPadrao";
import './SimpleHeader.css'

export const SimpleHeader = () => {
  return (
    <>
      <LayoutPadrao>
        <div className="simpleHeaderDiv">
          <Link to="/">
            <img className="imgSimpleHeader" src={logo} alt="Logotipo digital store" />
          </Link>
        </div>
      </LayoutPadrao>
    </>
  );
};
