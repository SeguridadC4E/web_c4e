import './About.css'
import { about } from '../resources/data.json'

const About = () => {
  console.log(about)
  const information = about.pageAbout
  return (
    <main className='about'>
      <section className='section-heroe'>
        <div className='heroe-big'>
          <img
            className='heroe-big-img'
            src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt='imagen de fondo'
          />
        </div>
        <div className='heroe-paragraph'>
          <h2 className='heroe-paragraph-title'>El origen de nuesta historia</h2>
        </div>
      </section>
      <section className='section-about-intro'>
        <p className='about-intro-text'>acuerdo legal</p>
        <article className='about-article'>
          <header className='about-article-header'>
            <h1 className='about-article-header-title'>C4E Cuji Seguridad del Ecuador Cia. Ltda.</h1>
          </header>
          <div className='about-article-section'>
            <p className='about-article-section-p'>Empresa enfocada en la seguridad acreditada según la Resolución Ministerial Nro. MDI-VSC-SOP-DRMSP-SP. Esta acreditación es avalada por Pablo Francisco Coello Larco, el Director de Regulación y Monitoreo de Seguridad Privada.</p>
            <p className='about-article-section-p'>De acuerdo con el Acuerdo Ministerial Nro. 196, publicado en el Registro Oficial Nro. 148, se expide el Reglamento para Regular el Procedimiento Administrativo y Sancionatorio de las Compañías de Vigilancia y Seguridad Privada. Este reglamento establece el procedimiento administrativo para el otorgamiento del permiso de operación y funcionamiento de las compañías de vigilancia y seguridad privada.</p>
          </div>
          <div className='about-article-section about-article-section-span'>
            <p className='about-article-section-p'>Este reglamento establece el procedimiento administrativo para el otorgamiento del permiso de operación y funcionamiento de las compañías de vigilancia y seguridad privada.</p>
          </div>
          <div className='about-article-section about-article-section-line'>
            <p className='about-article-section-p'>Nos especializamos en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.</p>
            <p className='about-article-section-p'>Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitoreo del teléfono.</p>
          </div>
          <footer className='about-article-footer'>
            <img
              className='about-article-footer-img'
              src='https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='image abot'
            />
          </footer>
        </article>
      </section>
      <section className='section-about-purpose'>
        {information.map(data => (
          <li
            className='about-section-purpose-card'
            key={data.id}
          >
            <article className='about-section-purpose-article'>
              <header className={data.classNameTitle}>
                <h2>{data.title}</h2>
              </header>
              <div className={data.classNameDescription}>
                <p>{data.description}</p>
              </div>
              <footer className={data.className}>
                <img src={data.img} alt={data.imgDescription} />
              </footer>
            </article>
          </li>
        ))}
      </section>
    </main>
  )
}

export default About
