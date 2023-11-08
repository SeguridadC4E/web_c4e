import './Main.css'
import { Link } from 'react-router-dom'
import CardsServices from '../components/CardsService.jsx'
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
