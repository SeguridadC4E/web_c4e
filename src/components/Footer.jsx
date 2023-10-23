import Logo from '../fragments/Logo'
import Rrss from './Rrss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <Logo />
        <section className='footer-address'>
          <p className='footer-p'>Ambato - Ecuador</p>
          <p className='footer-p'>0995794014 / 0991988083</p>
          <p className='footer-p'>seguridadc4e@gmail.com</p>
        </section>
        <Rrss />
      </div>
      <div className='footer-line' />
      <div className='footer-legend'>
        <p className='footer-legend-p'>Designed and Created by @Henry-Azogue</p>
      </div>
    </footer>
  )
}
export default Footer
