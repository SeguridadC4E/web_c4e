import { Link } from 'react-router-dom'
// import imgHeore1 from '../assets/img-content/IMG-20231002.jpg'
// import imgHeore2 from '../assets/img-content/Camaras-model.jpg'

const Main = () => {
  return (
    <main className='main'>
      <section className='section-front'>
        {/** olso */}
        {/** <img src={imgHeore1} alt='imagen del monitoreo de las canaras' className='section-img-1' /> */}
        <h2 className='front-h2'>seguridad</h2>
        <h2 className='front-h2'>privada</h2>
        <Link to='/services' className='front-button'>mas información</Link>
        {/** <img src={imgHeore2} alt='imagen de la empresa patrocinadore' className='section-img-2' /> */}
      </section>
      <section className='section-services'>
        <header className='section-services-header'>
          <h2 className='section-header-title'>descubre nuestros</h2>
          <h2 className='section-header-title'>servicios</h2>
        </header>
        <div className='section-services-cards'>
          <img src='../assets/img-content/666.jpg' alt='imagen del servicio de monitoreo y vigilancia' className='section-cards-image' />
          <h3 className='section-cards-title'>monitoreo y vigilancia</h3>
          <p className='section-cards-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta dolorem dolores laboriosam repudiandae magnam.</p>
          <Link to='/services' className='section-cards-buttton'>leer mas</Link>
        </div>
      </section>
    </main>
  )
}

export default Main
