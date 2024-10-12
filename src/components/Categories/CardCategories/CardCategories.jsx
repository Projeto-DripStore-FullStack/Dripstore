import './CardCategories.css'

export const CardCategories = (props) => {
  return(
    <div className='card-categories'>
      <div className='card-categories-img'>
        <img src={props.img} alt={props.alt} />
      </div>
      <p className='card-categories-description'>{props.description}</p>
    </div>
  )
}