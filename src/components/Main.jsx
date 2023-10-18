import { Link } from 'react-router-dom'
import Rrss from '../fragments/Rrss'

const Main = () => {
  return (
    <main className='main'>
      <section className='section-front'>
        <h2 className='front-h2'>seguridad</h2>
        <h2 className='front-h2'>privada</h2>
        <Link to='/sobre-nosotros' className='front-button'>mas información</Link>
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
        <div className='section-about-image' />
        <div className='section-about-info'>
          <header className='section-about-info-header'>
            <span className='section-about-info-header-span'>somos</span>
            <h1 className='section-about-info-header-h1'>c4e</h1>
          </header>
          <section className='section-about-info-body'>
            <p className='section-about-info-body-p'>Una empresa de seguridad privada especializada en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.</p>
            <p className='section-about-info-body-p'>Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitoreo...</p>
          </section>
          <footer className='section-about-info-footer'>
            <Link to='/sobre-nosotros' className='about-info-section-button'>seguir leyendo</Link>
            <Rrss />
          </footer>
        </div>
      </section>
    </main>
  )
}

export default Main
