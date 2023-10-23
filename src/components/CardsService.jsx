import { Link } from 'react-router-dom'
import { GlobalContext } from '../provider/Provider'
import { useContext } from 'react'

const CardsServices = () => {
  const { main } = useContext(GlobalContext)
  const { sectionServices } = main
  console.log(sectionServices)

  return (
    <ul className='fragment-car-services-ul'>
      {sectionServices.map((service) =>
        <li key={service?.id} className='fragment-car-services-ul-li'>
          <div className='fragment-car-services-ul-li-div'>
            <img src={service?.imageBackground} alt={service?.imageAlter} className='fragment-car-services-ul-li-div-img' />
            <Link to='/servicios/:id' className='fragment-card-services-ul-li-div-link'>{service?.title}</Link>
          </div>
        </li>
      )}
    </ul>
  )
}

export default CardsServices
