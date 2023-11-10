import './CardsService.css'
import { Link } from 'react-router-dom'
import { cardServices } from '../resources/data.json'

const CardsServices = () => {
  // console.log(cardServices)
  return (
    <ul className='fragment-card-ul'>
      {cardServices.map((card) =>
        <li
          className='fragment-card-container'
          key={card?.id}
        >
          <article className='fragment-card-article'>
            <img
              className='fragment-card-img'
              src={card?.image.imageService}
              alt={card?.image.imageAlter}
            />
            <div className='fragment-card-data'>
              {/* <span className='fragment-card-description' /> */}
              <h2 className='fragment-card-title'>
                {card?.service.subtitle}
              </h2>
              <Link
                to='/servicios/:id'
                className='fragment-card-button'
              >Conocer más
              </Link>
            </div>
          </article>
        </li>
      )}
    </ul>
  )
}

export default CardsServices
