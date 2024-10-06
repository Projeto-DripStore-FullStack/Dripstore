import React from "react";
import './LayoutPadrao.css';

const LayoutPadrao = ({children, layoutType}) => {
  return (
    <>
      <div className={`site-container ${layoutType}`}>
        {children}
      </div>
    </>
  );
};

export default LayoutPadrao;
