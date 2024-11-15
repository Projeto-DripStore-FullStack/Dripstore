import { useState, useEffect } from "react";
import axios from "axios";
import "./AsideFilter.css";

export const AsideFilter = ({ onFilterChange }) => {
  const [produtos, setProdutos] = useState([]);
  const [categoriasFuncao, setCategoriasFuncao] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    marca:[],
    categoriaFuncao: [],
    genero:[],
    estado:[],
  });

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/produtos");
      const produtosData = response.data;

      if (Array.isArray(produtosData)) {
        setProdutos(produtosData);
      } else {
        console.error("Expected an array but got:", produtosData);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  const getCategoriasFuncao = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/categoriasFuncaoPeca"
      );
      const categoriasData = response.data;

      if (Array.isArray(categoriasData)) {
        setCategoriasFuncao(
          categoriasData.map((categoria) => categoria.funcao)
        );
      } else {
        console.error("Expected an array but got:", categoriasData);
      }
    } catch (error) {
      console.error("Erro ao buscar as categorias de função:", error);
    }
  };

  useEffect(() => {
    getProduct();
    getCategoriasFuncao();
  }, []);

  const marcas = [...new Set(produtos.map((produto) => produto.marca))];
  const genero = [...new Set(produtos.map((produto) => produto.genero))];
  const estado = [...new Set(produtos.map((produto) => produto.estado))];

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...selectedFilters };
    const filterList = updatedFilters[category];

    if (filterList.includes(value)) {
      updatedFilters[category] = filterList.filter(item => item !== value);
    } else {
      updatedFilters[category].push(value);
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <aside className="product-list-filter">
      <h3>Filtrar por</h3>
      <form className="product-list-filter-form">
        <p>Marca</p>
        {marcas.map((marca, index) => (
          <label key={index}>
            <input type="checkbox" name="marca" value={marca} onChange={() => handleFilterChange("marca", marca)}/>
            {marca}
          </label>
        ))}

        <p>Categoria</p>
        {categoriasFuncao.map((categoria, index) => (
          <label key={index}>
            <input type="checkbox" name="categoriaFuncao" value={categoria} onChange={() => handleFilterChange("categoriaFuncao", categoria)}/>
            {categoria}
          </label>
        ))}

        <p>Gênero</p>
        {genero.map((genero, index) => (
          <label key={index}>
            <input type="checkbox" name="genero" value={genero} onChange={() => handleFilterChange("genero", genero)}/>
            {genero}
          </label>
        ))}

        <p>Estado</p>
        {estado.map((estado, index) => (
          <label key={index}>
            <input type="checkbox" name="estado" value={estado} onChange={() => handleFilterChange("estado", estado)}/>
            {estado}
          </label>
        ))}
      </form>
    </aside>
  );
};
