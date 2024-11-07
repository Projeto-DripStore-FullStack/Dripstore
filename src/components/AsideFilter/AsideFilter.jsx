import { useState, useEffect } from "react";
import axios from "axios";
import "./AsideFilter.css";

export const AsideFilter = () => {
  const [produtos, setProdutos] = useState([]);

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

  useEffect(() => {
    getProduct();
  }, []);

  // Verificando se os produtos e as categorias estão definidos corretamente
  const marcas = [...new Set(produtos.map((produto) => produto.marca))];
  const genero = [...new Set(produtos.map((produto) => produto.genero))];
  const tamanho = [...new Set(produtos.map((produto) => produto.tamanho))];
  const categorias = [...new Set(produtos.map((produto) => produto.categoria))];

  return (
    <aside className="product-list-filter">
      <h3>Filtrar por</h3>
      <form className="product-list-filter-form">
        <p>Marca</p>
        {marcas.map((marca, index) => (
          <label key={index}>
            <input type="checkbox" name="marca" value={marca} />
            {marca}
          </label>
        ))}

        <p>Categoria</p>
        {categorias.map((categoria, index) => (
          <label key={index}>
            <input type="checkbox" name="categoria" value={categoria} />
            {categoria}
          </label>
        ))}

        <p>Gênero</p>
        {genero.map((genero, index) => (
          <label key={index}>
            <input type="checkbox" name="genero" value={genero} />
            {genero}
          </label>
        ))}

        <p>Tamanho</p>
        {tamanho.map((tamanho, index) => (
          <label key={index}>
            <input type="checkbox" name="tamanho" value={tamanho} />
            {tamanho}
          </label>
        ))}
      </form>
    </aside>
  );
};
