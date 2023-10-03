import instagramSvg from './../assets/instagram.svg'
import facebookSvg from './../assets/facebook.svg'
import questionSvg from './../assets/question-circle.svg'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <ul className='footer-rrss'>
          <li className='footer-rrss-li'>
            <a href='#' className='footer-rrss-li-a'>
              <img
                src={instagramSvg}
                alt='icono de instagram que redirecciona a otra pagina'
                className='footer-rrss-li-a-svg'
              />
            </a>
          </li>
          <li className='footer-rrss-li'>
            <a href='#' className='footer-rrss-li-a'>
              <img
                src={facebookSvg}
                alt='icono de facebook que redirecciona a otra pagina'
                className='footer-rrss-li-a-img'
              />
            </a>
          </li>
          <li className='footer-rrss-li'>
            <a href='#' className='footer-rrss-li-a'>
              <img
                src={questionSvg}
                alt='icono que simboliza esperando mas redes sociales'
                className='footer-rrss-li-a-img'
              />
            </a>
          </li>
        </ul>
        <Logo />
        <section className='footer-address'>
          <p className='footer-p'><span className='footer-p-span'>Dirección:</span>Ambato - Ecuador</p>
          <p className='footer-p'><span className='footer-p-span'>Celular:</span>+593 99 579 4014</p>
          <p className='footer-p'><span className='footer-p-span'>Email:</span>seguridadc4e@gmail.com</p>
        </section>
      </div>
      <div className='footer-legend'>
        <p className='footer-legend-p'>Power of @HenryDev</p>
      </div>
      <div className='footer-line' />
    </footer>
  )
}
export default Footer
