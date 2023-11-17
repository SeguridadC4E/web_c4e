import './About.css'
import trustAbout from './../assets/img-content/trust-about.jpg'

const About = () => {
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
          <h1 className='heroe-paragraph-title'>El origen de nuesta historia</h1>
        </div>
      </section>
      <section className='section-about-intro'>
        <p className='about-intro-text'>acuerdo legal</p>
        <article className='about-article'>
          <header className='about-article-header'>
            <h2 className='about-article-header-title'>C4E Cuji Seguridad del Ecuador Cia. Ltda.</h2>
          </header>
          <section className='about-article-section'>
            <p className='about-article-section-p'>Empresa enfocada en la seguridad acreditada según la Resolución Ministerial Nro. MDI-VSC-SOP-DRMSP-SP. Esta acreditación es avalada por Pablo Francisco Coello Larco, el Director de Regulación y Monitoreo de Seguridad Privada.</p>
            <p className='about-article-section-p'>De acuerdo con el Acuerdo Ministerial Nro. 196, publicado en el Registro Oficial Nro. 148, se expide el Reglamento para Regular el Procedimiento Administrativo y Sancionatorio de las Compañías de Vigilancia y Seguridad Privada. Este reglamento establece el procedimiento administrativo para el otorgamiento del permiso de operación y funcionamiento de las compañías de vigilancia y seguridad privada.</p>
          </section>
          <section className='about-article-section about-article-section-span'>
            <p className='about-article-section-p'>Este reglamento establece el procedimiento administrativo para el otorgamiento del permiso de operación y funcionamiento de las compañías de vigilancia y seguridad privada.</p>
          </section>
          <section className='about-article-section about-article-section--line'>
            <p className='about-article-section-p'>Nos especializamos en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.</p>
            <p className='about-article-section-p'>Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitoreo del teléfono.</p>
          </section>
          <footer className='about-article-footer'>
            <img
              className='about-article-footer-img'
              src={trustAbout}
              alt='image abot'
            />
          </footer>
        </article>
      </section>
      <section className='page-about-section-mission'>
        <div className='page-about-section-div'>
          <h3 className='page-about-section-div-h3'>nuestra misión</h3>
          <p className='page-about-section-div-p'>Ser una empresa de seguridad privada líder, reconocida por su inquebrantable credibilidad y confiabilidad. Nos dedicamos a salvaguarda bienes, muebles e inmuebles, así como la seguridad de empresas y personas. Lo hacemos empleando recursos profesionales altamente capacitados y tecnología, incluyendo sistemas de seguridad electrónica y monitoreo constante las 24 horas del día. Nuestro compromiso es brindar a nuestros clientes la tranquilidad necesaria para que puedan llevar a cabo sus actividades cotidianas con total confianza en su seguridad.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1517913451214-e22ce660e086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1946&q=80' alt='image abot' className='page-about-section-img' />
      </section>
      <section className='page-about-section-missionVision'>
        <div className='page-about-section-div'>
          <h3 className='page-about-section-div-h3'>nuestra visión</h3>
          <p className='page-about-section-div-p'>Nuestra visión es crear un entorno donde la seguridad sea sinónimo de tranquilidad, confianza y calidad de vida. Nos esforzamos por ofrecer soluciones personalizadas y superar las expectativas de nuestros clientes. A medida que avanzamos, nuestra pasión por la seguridad sigue siendo el motor que nos impulsa a crecer y expandir nuestra huella, garantizando un lugar más seguro para todos.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1542769494-0cc077eead4b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974' alt='image abot' className='page-about-section-img' />
      </section>
    </main>
  )
}

export default About
