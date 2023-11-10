import './Main.css'
import { Link } from 'react-router-dom'
import CardsService from '../components/CardsService.jsx'
import LogoScrolling from '../fragments/LogoScrolling.jsx'
import { articles, about } from '../resources/data.json'

const Main = () => {
  return (
    <main className='main'>
      {/* section de la portada */}
      <section className='section-front'>
        <div>
          <p className='section-front-p'>nosotros somos</p>
          <h1 className='section-front-h1'>c4e cuji seguridad del ecuador cia. ltda.</h1>
          <p className='section-front-text'>Brindamos protección a residencias, locales comerciales, instalamos sistemas de seguridad</p>
          <Link to='/servicios' className='section-front-button btn-animation'>leer más<span>&#10230;</span></Link>
        </div>
      </section>
      {/* section modelo de negocio */}
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
                    referrerPolicy={article.referrerpolicy}
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
      {/* section about */}
      <section className='section-about'>
        <div className='section-container'>
          <img
            className='section-about-image'
            src={about.img}
            alt={about.alter}
          />
          <article className='section-about-info'>
            <header className='section-about-info-header'>
              <h2 className='section-about-info-header-h1'>{about.title}</h2>
            </header>
            <section className='section-about-info-body'>
              <p className='section-about-info-body-p'>{about.text1}</p>
              <Link
                to='/sobre-nosotros'
                className='article-link'
                referrerPolicy={about.referrerpolicy}
                target={about.target}
                rel={about.rel}
              >leer más<span>&#10230;</span>
              </Link>
            </section>
          </article>
        </div>
      </section>
      {/* section services */}
      <section className='section-services'>
        <h2 className='section-services-title'>nuestros servicios</h2>
        <CardsService />
      </section>
      {/* section contact */}
      <section className='section-contact'>
        <div className='section-contact-div'>
          <h2 className='section-contact-title'>Tienes interes por nuestros servicios</h2>
          <p className='section-contact-p'>Solicita más información para conocer los beneficios de C4E SEGURIDAD</p>
        </div>
        <Link className='article-link' to='/contacto'>contactanos<span>&#10230;</span></Link>
      </section>
      <section className='section-helper'>
        <h3 className='section-helper-title'>Empresas que confian en c4e seguridad</h3>
        <LogoScrolling />
      </section>
    </main>
  )
}

export default Main
