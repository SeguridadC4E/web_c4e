import './Services.css'
import { Link } from 'react-router-dom'
import { cardServices } from '../resources/data.json'

const Services = () => {
  console.log(cardServices)
  return (
    <>
      <div className='page-services'>
        <span className='page-services-header-span-title'>nuestros servicios</span>
        <span className='page-services-header-span-title'>a la altura</span>
        <span className='page-services-header-span-title'>de tus necesidades</span>
      </div>
      <section className='page-services-section'>
        <h3 className='page-services-section-title'>nuestros servicios</h3>
        <div className='page-services-section-body-odd'>
          <img src={cardServices[0].image.imageService} alt={cardServices[0].image.imageAlter} className='page-services-section-body-odd-img' />
          <section className='page-services-section-body-odd-info'>
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[0].service.number}</span>/{cardServices[0].service.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[0].service.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[0].service.description[0]}</p>
            <Link
              to='/services/:id'
              className='page-services-section-body-info-link'
              rel={cardServices[0].button.rel}
              referrerPolicy={cardServices[0].button.referrerPolicy}
              target={cardServices[0].button.target}
            >{cardServices[0].button.title}
            </Link>
          </section>
          <div />
        </div>
        <div className='page-services-section-body-even'>
          <div />
          <section className='page-services-section-body-even-info'>
            <h2 className='page-services-section-body-even-info-title'><span className='page-services-section-body-even-info-title-span'>{cardServices[1].service.number}</span>/{cardServices[0].service.title}</h2>
            <h3 className='page-services-section-body-even-info-subtitle'>{cardServices[1].service.subtitle}</h3>
            <p className='page-services-section-body-even-info-paragraph'>{cardServices[1].service.description[0]}</p>
            <Link
              to='/services/:id'
              className='page-services-section-body-info-link'
              rel={cardServices[1].button.rel}
              referrerPolicy={cardServices[1].button.referrerPolicy}
              target={cardServices[1].button.target}
            >{cardServices[1].button.title}
            </Link>
          </section>
          <img src={cardServices[1].image.imageService} alt={cardServices[1].image.imageAlter} className='page-services-section-body-even-img' />
        </div>
        <div className='page-services-section-body-odd'>
          <img src={cardServices[2].image.imageService} alt={cardServices[2].image.imageAlter} className='page-services-section-body-odd-img' />
          <section className='page-services-section-body-odd-info'>
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[2].service.number}</span>/{cardServices[2].service.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[2].service.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[2].service.description[0]}</p>
            <Link
              to='/services/:id'
              className='page-services-section-body-info-link'
              rel={cardServices[2].button.rel}
              referrerPolicy={cardServices[2].button.referrerPolicy}
              target={cardServices[2].button.target}
            >{cardServices[2].button.title}
            </Link>
          </section>
          <div />
        </div>
        <div className='page-services-section-body-even'>
          <div />
          <section className='page-services-section-body-even-info'>
            <h2 className='page-services-section-body-even-info-title'><span className='page-services-section-body-even-info-title-span'>{cardServices[3].service?.number}</span>/{cardServices[3].service?.title}</h2>
            <h3 className='page-services-section-body-even-info-subtitle'>{cardServices[3].service?.subtitle}</h3>
            <p className='page-services-section-body-even-info-paragraph'>{cardServices[3].service?.description[0]}</p>
            <Link
              to='/services/:id'
              className='page-services-section-body-info-link'
              rel={cardServices[3].button.rel}
              referrerPolicy={cardServices[3].button.referrerPolicy}
              target={cardServices[3].button.target}
            >{cardServices[3].button.title}
            </Link>
          </section>
          <img src={cardServices[3].image.imageService} alt={cardServices[3].image.imageAlter} className='page-services-section-body-even-img' />
        </div>
        <div className='page-services-section-body-odd'>
          <img src={cardServices[4].image.imageService} alt={cardServices[4].image.imageAlter} className='page-services-section-body-odd-img' />
          <section className='page-services-section-body-odd-info'>
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[4].service.number}</span>/{cardServices[4].service.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[4].service.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[4].service.description[0]}</p>
            <Link
              to='/services/:id'
              className='page-services-section-body-info-link'
              rel={cardServices[4].button.rel}
              referrerPolicy={cardServices[4].button.referrerPolicy}
              target={cardServices[4].button.target}
            >{cardServices[4].button.title}
            </Link>
          </section>
          <div />
        </div>
      </section>
    </>
  )
}

export default Services
