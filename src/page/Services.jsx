import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../provider/Provider'

const Services = () => {
  const { pageServices } = useContext(GlobalContext)
  const { cardServices } = pageServices
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
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[0].information.number}</span>/{cardServices[0].information.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[0].information.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[0].information.description}</p>
            <Link to='/services/:id' className='page-services-section-body-odd-info-link'>más información</Link>
          </section>
          <div />
        </div>
        <div className='page-services-section-body-even'>
          <div />
          <section className='page-services-section-body-even-info'>
            <h2 className='page-services-section-body-even-info-title'><span className='page-services-section-body-even-info-title-span'>{cardServices[0].information.number}</span>/{cardServices[0].information.title}</h2>
            <h3 className='page-services-section-body-even-info-subtitle'>{cardServices[0].information.subtitle}</h3>
            <p className='page-services-section-body-even-info-paragraph'>{cardServices[0].information.description}</p>
            <Link to='/services/:id' className='page-services-section-body-even-info-link'>más información</Link>
          </section>
          <img src={cardServices[0].image.imageService} alt={cardServices[0].image.imageAlter} className='page-services-section-body-even-img' />
        </div>
        <div className='page-services-section-body-odd'>
          <img src={cardServices[0].image.imageService} alt={cardServices[0].image.imageAlter} className='page-services-section-body-odd-img' />
          <section className='page-services-section-body-odd-info'>
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[0].information.number}</span>/{cardServices[0].information.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[0].information.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[0].information.description}</p>
            <Link to='/services/:id' className='page-services-section-body-odd-info-link'>más información</Link>
          </section>
          <div />
        </div>
        <div className='page-services-section-body-even'>
          <div />
          <section className='page-services-section-body-even-info'>
            <h2 className='page-services-section-body-even-info-title'><span className='page-services-section-body-even-info-title-span'>{cardServices[0].information.number}</span>/{cardServices[0].information.title}</h2>
            <h3 className='page-services-section-body-even-info-subtitle'>{cardServices[0].information.subtitle}</h3>
            <p className='page-services-section-body-even-info-paragraph'>{cardServices[0].information.description}</p>
            <Link to='/services/:id' className='page-services-section-body-even-info-link'>más información</Link>
          </section>
          <img src={cardServices[0].image.imageService} alt={cardServices[0].image.imageAlter} className='page-services-section-body-even-img' />
        </div>
        <div className='page-services-section-body-odd'>
          <img src={cardServices[0].image.imageService} alt={cardServices[0].image.imageAlter} className='page-services-section-body-odd-img' />
          <section className='page-services-section-body-odd-info'>
            <h2 className='page-services-section-body-odd-info-title'><span className='page-services-section-body-odd-info-title-span'>{cardServices[0].information.number}</span>/{cardServices[0].information.title}</h2>
            <h3 className='page-services-section-body-odd-info-subtitle'>{cardServices[0].information.subtitle}</h3>
            <p className='page-services-section-body-odd-info-paragraph'>{cardServices[0].information.description}</p>
            <Link to='/services/:id' className='page-services-section-body-odd-info-link'>más información</Link>
          </section>
          <div />
        </div>
      </section>
    </>
  )
}

export default Services
