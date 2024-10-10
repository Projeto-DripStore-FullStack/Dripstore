import './Hero.css'
import Sneaker from '../../assets/White-Sneakers-Home.png'
import Memphis from '../../assets/memphis.png'
import Fire from '../../assets/queima_de_estoque.png'

export const Hero = () =>{
  return(
    <main className='hero-container'>
      <div className='hero-content'>
        <div className='hero-text-content'>
          <h4>Melhores ofertas personalizadas</h4>
          <h1 className='hero-call'>Queima de estoque Nike <img src={Fire} alt="" /> </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore vitae ab! Maiores nesciunt, suscipit consectetur placeat illum velit omnis quisquam alias?</p>
          <button>Ver Ofertas</button>
        </div>
        <div className='hero-img-content'>
          <img src={Sneaker} alt="nike sneaker" className='sneaker-img'/>
          <img src={Memphis} alt="memphis" className='memphis-img'/>
        </div>
      </div>
    </main>
  )
}