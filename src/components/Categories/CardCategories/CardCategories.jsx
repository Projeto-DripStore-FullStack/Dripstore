import { useNavigate } from "react-router-dom";
import './CardCategories.css';

export const CardCategories = (props) => {
  const navigate = useNavigate();

  // Função para redirecionar para a página com o id da categoria
  const handleCategoryClick = () => {
    navigate(`/ProductList?categoriaPeca_id=${props.id}`);
  };

  return (
    <div className='card-categories' onClick={handleCategoryClick}>
      <div className='card-categories-img'>
        <img src={props.img} alt={props.alt} />
      </div>
      <p className='card-categories-description'>{props.description}</p>
    </div>
  );
};
