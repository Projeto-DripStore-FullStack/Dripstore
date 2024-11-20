import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [quantidade, setQuantidade] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  const atualizarCarrinho = (novaQuantidade, novoSubtotal) => {
    const valorSubtotal = parseFloat(novoSubtotal);

    if (!isNaN(valorSubtotal)) {
      setQuantidade(novaQuantidade);
      setSubtotal(valorSubtotal);
      localStorage.setItem("quantidade", novaQuantidade);
      localStorage.setItem("total", valorSubtotal.toFixed(2));
    } else {
      console.error("O subtotal fornecido não é um número válido.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        quantidade,
        subtotal,
        atualizarCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
