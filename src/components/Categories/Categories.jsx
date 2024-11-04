import axios from "axios";
import { useEffect, useState } from "react";
import { CardCategories } from "./CardCategories/CardCategories";
import "./Categories.css";
import TShirt from "../../assets/Tshirt.png";
import Pants from "../../assets/Pants.png";
import Sneakers from "../../assets/sneakers.png";
import Headphones from "../../assets/Headphones.png";

export const Categories = () => {
  const [categorias, setCategorias] = useState([]);

  const imageMapping = {
    Camiseta: TShirt,
    Calças: Pants,
    "Tênis": Sneakers,
    "Fones": Headphones,
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categorias");
      const categoriasData = response.data;

      if (Array.isArray(categoriasData)) {
        setCategorias(categoriasData);
      } else {
        console.error("Expected an array but got:", categoriasData);
      }
    } catch (error) {
      console.error("Erro ao buscar as categorias:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categorie-container">
      {categorias.map((categoria, index) => (
        <CardCategories
          key={index}
          img={imageMapping[categoria.nome] || TShirt}
          alt={categoria.nome}
          description={categoria.nome}
        />
      ))}
    </div>
  );
};
