import { Link } from 'react-router-dom'

const CardsServices = () => {
  return (
    <ul className='fragment-car-services'>
      <li className='fragment-car-services-ul-li'>
        <img src='https://images.unsplash.com/photo-1581568736305-49a04e012c13?auto=format&fit=crop&q=80&w=1547&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagen de una guardia de seguridad' className='fragment-car-services-ul-li-img' />
        <Link className='fragment-card-services-ul-li-link'>guardias de seguridad</Link>
      </li>
    </ul>
  )
}

export default CardsServices
