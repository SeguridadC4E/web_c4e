import menuList from './../assets/list.svg'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Headboard = () => {
  return (
    <header className='header'>
      <Logo />
      <div className='header-menu'>
        <img
          className='header-menu-svg'
          src={menuList}
          alt='icono del boton de menu de navegacion'
        />
      </div>
      <ul className='header-ul'>
        <li className='header-ul-li'>
          <Link to='/'> Inicio</Link>
        </li>
        <li className='header-ul-li'>
          <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </li>
        <li className='header-ul-li'>
          <Link to='/servicios'>Servicios</Link>
        </li>
        <li className='header-ul-li'>
          <Link to='/galeria'>Galeria</Link>
        </li>
        <li className='header-ul-li'>
          <Link to='contacto'>Contacto</Link>
        </li>
      </ul>
    </header>
  )
}

export default Headboard
