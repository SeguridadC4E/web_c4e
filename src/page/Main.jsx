import './Main.css'
import { Link } from 'react-router-dom'
import CardsServices from '../components/CardsService.jsx'
import { articles } from '../resources/data.json'

const Main = () => {
  return (
    <main className='main'>
      <section className='section-front'>
        <div>
          <p className='section-front-p'>nosotros somos</p>
          <h1 className='section-front-h1'>c4e cuji seguridad del ecuador cia. ltda.</h1>
          <p className='section-front-text'>Brindamos protección a residencias, locales comerciales, instalamos sistemas de seguridad</p>
          <Link to='/servicios' className='section-front-button btn-animation'>leer más<span>&#10230;</span></Link>
        </div>
      </section>
      <section className='section-legend'>
        <article className='section-legend-article'>
          <header className='legend-article-header'>
            <h2 className='section-legend-title'>c4e seguridad</h2>
            <h3 className='section-legend-subtitle'>Tu mejor alternativa en temas de seguridad</h3>
          </header>
          <ul className='section-ul'>
            {articles.map(article => (
              <li key={article.id} className='section-ul-li'>
                <section className='article'>
                  <img
                    className='article-img'
                    src={article.img}
                    alt={article.alter}
                  />
                  <h2 className='article-title'>{article.title}</h2>
                  <p className='article-text'>{article.description}</p>
                  <Link
                    className='article-link'
                    to='/servicios'
                    rel={article.rel}
                    referrerpolicy={article.referrerpolicy}
                    target={article.target}
                  >
                    leer más<span>&#10230;</span>
                  </Link>
                </section>
              </li>
            ))}
          </ul>
        </article>
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
          </footer>
        </div>
      </section>
      <section className='section-services'>
        <div className='section-services-content'>
          <h2 className='section-services-title'>nuestros servicios</h2>
          <Link to='/servicios' className='section-services-content-link'>ver mas</Link>
        </div>
        <CardsServices />
      </section>
      <section className='section-contact'>
        <h3 className='section-contact-title'>contactanos</h3>
      </section>
      <section className='section-extra'>
        <h3 className='section-extra-title'>extra</h3>
      </section>
    </main>
  )
}

export default Main
