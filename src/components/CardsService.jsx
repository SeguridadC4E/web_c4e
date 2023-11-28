import './CardsService.css'
import { Link } from 'react-router-dom'
import { cardServices } from '../resources/data.json'

const CardsServices = () => {
  return (
    <ul className='card'>
      {cardServices.map((card) =>
        <li
          className='card__container'
          key={card?.id}
        >
          <article className='card__article'>
            <div className='card__content-img'>
              <img
                className='card__img'
                src={card?.image.imageService}
                alt={card?.image.imageAlter}
              />
            </div>
            <div className='card__data'>
              <h2 className='card__title'>
                {card?.service.subtitle}
              </h2>
              <Link
                to='/servicios/:id'
                className='card__button'
              >{card?.service.object}
              </Link>
            </div>
          </article>
        </li>
      )}
    </ul>
  )
}

export default CardsServices
