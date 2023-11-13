import './Footer.css'
import Logo from '../fragments/Logo'
import Rrss from './Rrss'
import { Link } from 'react-router-dom'
import { cardServices } from '../resources/data.json'

export default function Footer () {
  console.log(cardServices.image)
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='content-div'>
          <h6 className='content-div-title'>explora</h6>
          <ul>
            <li className='content-div-ul'>
              <Link
                to='/'
                target='_self'
                rel='nofollow noopener noreferrer'
              >
                Inicio
              </Link>
            </li>
            <li className='content-div-ul'>
              <Link
                to='/sobre-nosotros'
                target='_self'
                rel='nofollow noopener noreferrer'
              >
                ¿Quienes somos?
              </Link>
            </li>
            <li className='content-div-ul'>
              <Link
                to='/servicios'
                target='_self'
                rel='nofollow noopener noreferrer'
              >
                Servicios
              </Link>
            </li>
            <li className='content-div-ul'>
              <Link
                to='/contacto'
                target='_self'
                rel='nofollow noopener noreferrer'
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className='content-div'>
          <h6 className='content-div-title'>Agradecimientos</h6>
          <p className='content-div-title-p'>Este proyecto fue posible gracias a:</p>
          <p className='content-div-a'>
            <Link
              to='https://unsplash.com/es/@rayner'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Rayner Simpon'
            > @rayner
            </Link>,
            <Link
              to='https://unsplash.com/es/@guibusted'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Guilherme Bustamante'
            > @guibusted
            </Link>,
            <Link
              to='https://unsplash.com/es/@fuerte'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Colin'
            > @fuerte
            </Link>,
            <Link
              to='https://unsplash.com/es/@vanderfilms'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Vander Films'
            > @vanderfilms
            </Link>,
            <Link
              to='https://unsplash.com/es/@sixstreetunder'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Craing Whitehead'
            > @sixstreetunder
            </Link>,
            <Link
              to='https://unsplash.com/es/@drew_harbour'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Drew Harbour'
            > @drew_harbour
            </Link>,
            <Link
              to='https://unsplash.com/es/@tai_jyun'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Tai Jyun Chang'
            > @tai_jyun
            </Link>,
            <Link
              to='https://unsplash.com/es/@some_tale'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Some Tale'
            > @some_tale
            </Link>,
            <Link
              to='https://unsplash.com/es/@rubiopil'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Pilar Rubio'
            > @rubiopil
            </Link>,
            <Link
              to='https://unsplash.com/es/@jusdevoyage'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Jusdevoyage'
            > @jusdevoyage
            </Link>,
            <Link
              to='https://unsplash.com/es/@jakobowens1'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Jakob Owens'
            > @jakobowens1
            </Link>,
            <Link
              to='https://unsplash.com/es/@florianolv'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Florian Olivo'
            > @florianolv
            </Link>,
            <Link
              to='https://unsplash.com/es/@jacekjaniczak'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Jacek Janiczak'
            > @jacekjaniczak
            </Link>,
            <Link
              to='https://unsplash.com/es/@andrespil'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a André Spilborghs'
            > @andrespil
            </Link>,
            <Link
              to='https://unsplash.com/es/@davidcainphoto'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a David Cain'
            > @davidcainphoto
            </Link>,
            <Link
              to='https://unsplash.com/es/@security_concepts_services'
              target='_blank'
              rel='nofollow noopener noreferrer'
              title='Sigue a Job Moses'
            > @security_concepts_services
            </Link>
          </p>
        </div>
        <div className='content-div'>
          <h6 className='content-div-title'>Inspiración</h6>
          <p>Basado en los modelos de:</p>
          <p>
            <Link className='footer-legend-p' to='https://wildrootmarketing.com/' target='_blank' rel='nofollow noopener noreferrer' title='Visita la web de Wildrootmarketing'>@wildrootmarketing</Link>,
            <Link className='footer-legend-p' to='https://www.pinterest.es/pin/805933295846622479/' target='_blank' rel='nofollow noopener noreferrer' title='Visita a Etsy en pinterest'> @Etsy</Link>,
            <Link className='footer-legend-p' to='https://www.pinterest.es/pin/805933295846622562/' target='_blank' rel='nofollow noopener noreferrer' title='Visita el proyecto de Patience en Pinterest'> @Patience Sezerwapox</Link>,
            <Link className='footer-legend-p' to='https://www.pinterest.es/pin/805933295846620135/' target='_blank' rel='nofollow noopener noreferrer' title='Visita el proyecto de Linh en pinterest'> @Linh Quach</Link>
          </p>
        </div>
        <div className='content-div'>
          <Logo />
          <div className='content-div-p'>
            <p className='content-info'>Ambato - Ecuador</p>
            <p className='content-info'>0995794014 / 0991988083</p>
            <p className='content-info'>seguridadc4e@gmail.com</p>
          </div>
          <div className='content-div-rrss'>
            <Rrss />
          </div>
        </div>
      </div>
      <div className='footer-line' />
      <div className='footer-legend'>
        <h6>Desarrollado por</h6>
        <Link
          className='footer-legend-p'
          to='https://ec.linkedin.com/in/henryazogue'
          rel='nofollow noopener noreferrer'
          target='_blank'
          title='Visita la pagina del creador'
        >@HenryDev
        </Link>
      </div>
    </footer>
  )
}
