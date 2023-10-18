import onlyLogoC4E from './../assets/only-logo-c4e.png'
import fullLogoC4E from './../assets/full-name-logo-c4e.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={onlyLogoC4E} alt='logotipo de la empresa de seguridad C4E' className='logo-img' />
      <img src={fullLogoC4E} alt='logotipo de la empresa de seguridad C4E' className='logo-img logo-img--fullName' />
    </div>
  )
}

export default Logo
