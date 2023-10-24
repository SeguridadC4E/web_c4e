import menuHamburger from './../assets/svg/menu-Hamburger.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../fragments/Logo'

const Headboard = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header className='header'>
      <Logo />
      <button
        onClick={toggleMenu}
        className='header-menu'
      >
        <img
          className='header-menu-svg'
          src={menuHamburger}
          alt='icono del boton de menu de navegacion'
        />
      </button>
      <nav className={`header-nav ${menu ? 'isActive' : ''}`}>
        <ul className='header-ul'>
          <li className='header-ul-li'>
            <Link to='/'> Inicio</Link>
          </li>
          <li className='header-ul-li'>
            <Link to='/sobre-nosotros'>Conócenos</Link>
          </li>
          <li className='header-ul-li'>
            <Link to='/servicios'>Servicios</Link>
          </li>
          <li className='header-ul-li'>
            <Link to='/galeria'>Galeria</Link>
          </li>
          <li className='header-ul-li'>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Headboard
