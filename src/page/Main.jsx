import './Main.css'
import { Link } from 'react-router-dom'
import { articles, about, faqs, peopleSay, cardServices } from '../resources/data.json'
// import CardsService from '../components/CardsService.jsx'
// import LogoScrolling from '../fragments/LogoScrolling.jsx'
import ServiceTitleScrolling from '../fragments/ServiceTitleScrolling.jsx'
import logoCruzAzul from './../assets/image-partners/f-cruz-azul.jpg'
import logoFarmaciasEconomicas from './../assets/image-partners/farmacias-economicas.png'
import logoJena from './../assets/image-partners/jena.png'
import logoMykRectificadora from './../assets/image-partners/myk-rectificadora.png'
import logoUep from './../assets/image-partners/uep.jpg'
import logoWesternUnion from './../assets/image-partners/western-union.png'

const Main = () => {
  return (
    <main className='main'>

      {/* SECTION HEROE */}
      <section className='hero'>
        <div className='hero__content'>
          <p className='hero__name'>Empresa de</p>
          <h1 className='hero__title'>seguridad
          </h1>
          <h2 className='hero__span'>privada <span className='hero__span-quote'>■</span>____</h2>
          <p className='hero__text'>"Tu mejor alternativa en seguridad para eventos sociales, protección personal, tu hogar, tu empresa."</p>
          <Link to='/servicios' className='hero__button btn-animation'>leer más<span>&#10230;</span></Link>
        </div>
        <div className='hero__content hero__content-img'>
          <img className='hero__img' src='/Private-security.jpg' alt='imagen de la portada' />
        </div>
      </section>

      <ServiceTitleScrolling />

      {/* SECTION INTRO */}
      <section className='intro'>
        <p className='information__name'>un poco de nosotros</p>
        <section className='intro__container'>
          <div className='intro__content'>
            <img
              className='intro__img'
              src={about.img}
              alt={about.alter}
            />
          </div>
          <div className='intro__content-text'>
            <p className='intro__text'>{about.text1}</p>
            <Link
              to='/sobre-nosotros'
              className='hero__button btn-animation'
              referrerPolicy={about.referrerpolicy}
              target={about.target}
              rel={about.rel}
            >leer más<span>&#10230;</span>
            </Link>
          </div>
        </section>
        <article className='information'>
          <p className='information__name'>nuestros intereses</p>
          <ul className='information__ul'>
            {articles.map(article => (
              <li key={article.id} className='information__li'>
                <section className='article'>
                  <header className='article__header'>
                    <img
                      className='article__img'
                      src={article.img}
                      alt={article.alter}
                    />
                    <h2 className='article__title'>{article.title}</h2>
                  </header>
                  <p className='article__text'>{article.description}</p>
                </section>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* SECTION SERVICES */}
      <section className='services'>
        <h2 className='services__title'>nuestros servicios</h2>
        {/* <CardsService /> */}
        <section className='service-wrap'>
          <ul className='service-card'>
            {cardServices.map((service) =>
              <li
                className='service-card__container'
                key={service?.id}
              >
                <div className='service-card__card-content'>
                  <img
                    className='service-card__img'
                    src={service?.image.imageService}
                    alt={service?.image.imageAlter}
                  />
                </div>
                <div className='service-card__data'>
                  <h2 className='service-card__title'>
                    {service?.service.subtitle}
                  </h2>
                  <Link
                    to='/servicios'
                    className='service-card__button'
                  >{service?.service.object}
                    <span className='service-card__span'>
                      &#10230;
                    </span>
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </section>
      </section>

      {/* SECTION HELPERS */}
      <section className='section-helper'>
        <h3 className='section-helper__title'>empresas que confian en nosotros</h3>
        <div className='secyion-helper__wrap'>
          <ul className='section-helper__container'>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoFarmaciasEconomicas} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoWesternUnion} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoCruzAzul} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoMykRectificadora} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoJena} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoUep} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoFarmaciasEconomicas} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoWesternUnion} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoCruzAzul} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoMykRectificadora} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoJena} alt='Image 3'
              />
            </li>
            <li className='section-helper__content'>
              <img
                className='section-helper__img'
                src={logoUep} alt='Image 3'
              />
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className='section-faq'>
        <h2 className='section-faq__title'>Preguntas frecuentes</h2>
        <ul className='section-faq__tab'>
          {faqs.map(faq => (
            <li key={faq.id}>
              <input type='radio' name='acc' id={faq.inputId} />
              <label for={faq.inputFor}>
                <h2>{faq.question}</h2>
              </label>
              <div className='section-faq__content'>
                <p>
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION TESTIMONIAL */}
      <section className='section-testimonials'>
        <header className='section-testimonial__header'>
          <h2 className='section-testimonial__title'>Testimonios</h2>
        </header>
        <ul className='section-testimonial__container'>
          {
            peopleSay.map(say => (
              <li className='section-testimonial__content' key={say.id}>
                <article className='section-testimonial__content-article'>
                  <header className='section-testimonial__content-header'>
                    <img
                      className='section-testimonial__content-img'
                      src={say.svg}
                      alt={say.svgAlter}
                    />
                  </header>
                  <section className='section-testimonial__content-section'>
                    <p className='section-testimonial__content-p'>{say.testimonial}</p>
                  </section>
                  <footer className='section-testimonial__content-footer'>
                    <img
                      className='section-testimonial__content-footer-img'
                      src={say.image}
                      alt={say.alter}
                    />
                    <div className='section-testimonial__content-footer-div'>
                      <h3 className='section-testimonial__content-footer-h3'>{say.name}</h3>
                      <h4 className='section-testimonial__content-footer-h4'>{say.title}</h4>
                    </div>
                  </footer>
                </article>
              </li>
            ))
          }
        </ul>
      </section>

      {/* SECTION CONTACT */}
      <section className='section-contact'>
        <header className='section-contact__header'>
          <h3 className='section-contact__title'>Contactanos</h3>
          <h2 className='section-contact__title-first'>para más información <span className='hero__span-quote'>■</span> <span className='span-guion'>____</span></h2>
          <h4 className='section-contact__title-second'>escribe al</h4>
        </header>
        <div className='section-contact__content-data'>
          <div className='section-contact__link'>
            <a
              className='section-contact__link-data'
              href='mailto:hnrazogue@gmail.com'
            >seguridadc4e@gmail.com
            </a>
          </div>
          <div className='section-contact__link'>
            <a className='section-contact__link-data' href='tel:+593 995 794 014'>+593 995 794 014</a>
            <a className='section-contact__link-data' href='tel:+593 991 988 083'>+593 995 794 014</a>
          </div>
          <div className='section-contact__link'>
            <Link
              className='section-contact__link-icon'
              href='https://www.facebook.com/profile.php?id=100077485250435'
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='#e63f41' viewBox='0 0 16 16'>
                <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
