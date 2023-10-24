import onlyLogoC4E from './../assets/only-logo-c4e.png'
import fullLogoC4E from './../assets/full-name-logo-c4e.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={onlyLogoC4E} alt='logotipo de la empresa de seguridad C4E' className='logo-img' />
      <img src={fullLogoC4E} alt='logotipo de la empresa de seguridad C4E' className='logo-img logo-img--fullName' />
    </Link>
  )
}

export default Logo
