import './OfertaEspecial.css'
import AirJordansHP from '../../assets/AirJordansHP.png'

function OfertaEspecial() {
    return (
      <>
        <section className='ofertaEspecial'>
            <div className='imgAirJordan'>
                <img className='imgTenisAirJordan' src={AirJordansHP} alt="" />
            </div>
            <div className='textoOfertaEspecial'>
                <h4 className='titleOfertaEspecial'>ferta especial</h4>
                <h2 className='titleOfertaEspecial2'>Air Jordan edição de colecionador</h2>
                <p className='subTitleOfertaEspecial'>Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit.Vitae, non reprehenderit quae
                perspiciatis ipsa expedita voluptas tempora,
                temporibus ad minima repellendus corrupti.
                Illo alias doloremque ex id quas corporis
                tempora, tempore vel.</p>
                <button className='btnOfertaEspecial'>Ver Oferta</button>
            </div>
        </section>
      </>
    )
  }
  
  export default OfertaEspecial; 