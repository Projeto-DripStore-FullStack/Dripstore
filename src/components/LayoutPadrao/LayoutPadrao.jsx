import React from "react";
import './LayoutPadrao.css';

const LayoutPadrao = ({children}) => {
  return (
    <>
      <div className="site-container">
        {children}
      </div>
    </>
  );
};

export default LayoutPadrao;
