import { Link } from 'react-router-dom'
import designTeam from '../assets/Design-team.gif'

export default function PageWork () {
  return (
    <div style={{ 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center', 'padding': '5%', 'height': '100vh'}}>
      <h1
        style={{ 'font-size': '1.5rem', 'text-align': 'center', 'text-transform': 'uppercase', 'padding-bottom': '1rem', 'font-weight': '700', 'line-height': '2rem' }}
      >
        Pagina en desarrollo
      </h1>
      <Link
        style={{ 'color': 'white', 'background-color':'#b88ad5', 'border-radius': '35px', 'font-size': '1rem', 'text-align': 'center', 'text-transform': 'uppercase', 'padding': '1rem', 'font-weight': '700' }}
        to='/'
      >Regresa al Inicio
      </Link>
      <img
        style={{ 'width': '400px' }}
        src={designTeam}
        alt='imagen que indica que la pagina esta en construcción'
      />
    </div>
  )
}
