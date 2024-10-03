import React from "react";
import './LayoutPadrao.css';

const LayoutPadrao = ({ children, maxWidthContainer = "container-xl" }) => {
  return (
    <>
      <div className={`container ${maxWidthContainer}`} style={{ padding: 0 }}>
        {children}
      </div>
    </>
  );
};

export default LayoutPadrao;
