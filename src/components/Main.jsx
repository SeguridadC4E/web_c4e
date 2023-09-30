import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className='main'>
      <section className='section-front'>
        <div className='front-div'>
          <h2 className='front-div-h2'>seguridad</h2>
          <h2 className='front-div-h2 front-div-h2-space'>privada</h2>
        </div>
        <Link to='/services' className='front-button'>mas informacion</Link>
      </section>
    </main>
  )
}

export default Main
