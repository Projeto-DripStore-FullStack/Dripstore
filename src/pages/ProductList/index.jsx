import { Header } from "/src/components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";
import { AsideFilter } from "../../components/AsideFilter/AsideFilter";
import LayoutPadrao from "../../components/LayoutPadrao/LayoutPadrao";
import Produto from "../../components/Produto/Produto";
import { useState } from "react";

function ProductList() {
  const [filters, setFilters] = useState({});

  const onFilterChange = (filtro, valor) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filtro]: valor
    }));
  };

  return (
    <> 
      <Header />
      <LayoutPadrao layoutType="product-list">
        <AsideFilter onFilterChange={onFilterChange} />
        <Produto filters={filters} />
      </LayoutPadrao>
      <Footer /> 
    </>
  );
}

export default ProductList;
