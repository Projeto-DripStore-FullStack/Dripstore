import './Categories.css'
import { CardCategories } from "./CardCategories/CardCategories";
import TShirt from "../../assets/Tshirt.png";
import Pants from '../../assets/Pants.png'
import Sneakers from '../../assets/sneakers.png'
import Headphone from '../../assets/Headphones.png'

export const Categories = () => {
  return(
    <div className='categorie-container'>
      <CardCategories 
        img = {TShirt}
        alt = 'Camisetas'
        description = 'Camisetas'
      />
      <CardCategories 
        img = {Pants}
        alt = 'Calças'
        description = 'Calças'
      />
      <CardCategories 
        img = {Pants}
        alt = 'Bonés'
        description = 'Bonés'
      />
      <CardCategories 
        img = {Headphone}
        alt = 'Fones'
        description = 'Fones'
      />
      <CardCategories 
        img = {Sneakers}
        alt = 'Tênis'
        description = 'Tênis'
      />
    </div>
  )
}