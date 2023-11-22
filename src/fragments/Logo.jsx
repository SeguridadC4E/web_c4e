import './Logo.css'
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <Link to='/' className='logo' target='_self' rel='nofollow noopener noreferrer'>
      <div className='logo__content-one'>
        <h1 className='logo__title'><span>C</span><span className='logo__span-fourt'>4</span><span>E</span></h1>
        <span className='logo__span'>\</span>
      </div>
      <div className='logo__content-two'>
        <h2 className='logo__subtitle'>CUJI SEGURIDAD</h2>
        <h2 className='logo__subtitle'> DEL ECUADOR CIA. LTDA.</h2>
      </div>
    </Link>
  )
}
