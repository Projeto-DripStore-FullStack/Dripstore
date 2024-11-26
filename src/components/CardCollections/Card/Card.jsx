import './Card.css'

export const Card = (props) => {
  return (
    <div className="card-highlights" id={props.id}>
      <div className="card-content">
        <p className="cardTitle">{props.title}</p>
        <div className="divCardDescription">
          <h3 className="cardDescription">{props.description}</h3>
        </div>
        <button className="cardBtn-highlights">Comprar</button>
      </div>
      <img src={props.img} alt="" className="card-highlights-img" />
    </div>
  )
}