import { Link } from 'react-router-dom'
import Rrss from '../fragments/Rrss'
// import imgHeore1 from '../assets/img-content/IMG-20231002.jpg'
// import imgHeore2 from '../assets/img-content/Camaras-model.jpg'

const Main = () => {
  return (
    <main className='main'>
      <section className='section-front'>
        <h2 className='front-h2'>seguridad</h2>
        <h2 className='front-h2'>privada</h2>
        <Link to='/services' className='front-button'>mas información</Link>
      </section>
      <section className='section-legend'>
        <h2 className='section-legend-text'>
          Protegemos locales comerciales y residencias
        </h2>
        <h3 className='section-legend-text'>
          Instalación y mantenimientos de sistemas de seguridad
        </h3>
      </section>
      <section className='section-about'>
        <div className='section-about-div-image' />
        <div className='section-about-info'>
          <header className='about-info-header'>
            <span className='info-header-span'>somos</span>
            <h1 className='info-header-h1'>c4e cuji seguridad</h1>
          </header>
          <section className='about-info-section'>
            <p className='info-section-p'>Una empresa de seguridad privada especializada en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.</p>
            <p className='info-section-p'>Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitorearlas desde dispositivos remotos...</p>
          </section>
          <footer className='about-info-footer'>
            <Link to='/sobre-nosotros' className='about-info-section-button'>seguir leyendo</Link>
            <Rrss />
          </footer>
        </div>
      </section>
    </main>
  )
}

export default Main
