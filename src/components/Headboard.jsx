import './Headboard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import menuHamburger from './../assets/svg/menu-Hamburger.svg'
import Logo from '../fragments/Logo'

const Headboard = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header className='header'>
      <Logo />
      <div
        onClick={toggleMenu}
        className='header__button'
      >
        <img
          className='header__svg'
          src={menuHamburger}
          alt='icono del boton de menu de navegacion'
        />
      </div>
      <nav className={`header__nav ${menu ? 'isActive' : ''}`}>
        <ul className='header__ul'>
          <li className='header__li'>
            <Link to='/'> Inicio</Link>
          </li>
          <li className='header__li'>
            <Link to='/quienes-somos'>¿Quiénes Somos?</Link>
          </li>
          <li className='header__li'>
            <Link to='/servicios'>Servicios</Link>
          </li>
          <li className='header__li'>
            <Link to='/galeria'>Galeria</Link>
          </li>
          <li className='header__li'>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Headboard
