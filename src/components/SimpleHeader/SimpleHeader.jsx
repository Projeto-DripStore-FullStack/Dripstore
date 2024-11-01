import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import './SimpleHeader.css'

export const SimpleHeader = () => {
  return (
    <main className="simple-header">
      <div className="simple-header-container">
        <Link to="/"><img className="log-digital" src={logo} alt="" /></Link>
      </div>
    </main>
  );
};
