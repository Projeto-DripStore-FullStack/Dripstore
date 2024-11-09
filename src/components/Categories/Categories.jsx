import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importação do useNavigate
import { CardCategories } from "./CardCategories/CardCategories";
import "./Categories.css";
import TShirt from "../../assets/Tshirt.png";
import Pants from "../../assets/Pants.png";
import Sneakers from "../../assets/sneakers.png";
import Headphones from "../../assets/Headphones.png";

export const Categories = () => {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate(); // Inicialize o useNavigate

  const imageMapping = {
    Camiseta: TShirt,
    Calças: Pants,
    "Tênis": Sneakers,
    "Fones": Headphones,
  };

  const getCategoriaPecas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categoriaPecas");
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
    getCategoriaPecas();
  }, []);

  // Função para redirecionar para a página /ProductList com a categoria selecionada
  const handleCategoryClick = (categoriaTipo) => {
    navigate(`/ProductList?categoria=${encodeURIComponent(categoriaTipo)}`);
  };

  return (
    <div className="categorie-container">
      {categorias.map((categoria, index) => (
        <CardCategories
        key={index}
        img={imageMapping[categoria.tipo] || TShirt}
        alt={categoria.tipo}
        description={categoria.tipo}
        id={categoria.id}  // Passa o id da categoria
      />
      ))}
    </div>
  );
};
