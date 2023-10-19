import trustAbout from './../assets/img-content/trust-about.jpg'
import westernUnion from './../assets/image-partners/western-union.jpeg'

const About = () => {
  return (
    <main className='page-about'>
      <header className='page-about-header'>
        <div className='page-about-header-div'>
          <h3 className='page-about-header-title'>seguridad</h3>
          <h3 className='page-about-header-title'>protección</h3>
          <h3 className='page-about-header-title'>tecnología en seguridad</h3>
        </div>
        <p className='page-about-header-text'>Brindamos a nuestros clientes la tranquilidad necesaria para que puedan llevar a cabo sus actividades cotidianas con total confianza en su seguridad.</p>
      </header>
      <section className='page-about-section-intro'>
        <h2 className='page-about-section-intro-h2'>acerca de nosotros</h2>
        <div className='page-about-section-intro-div'>
          <p className='page-about-section-intro-div-p'>Somos C4E Cuji Seguridad del Ecuador Cia. Ltda., una compañía de seguridad acreditada según la Resolución Ministerial Nro. MDI-VSC-SOP-DRMSP-SP. Esta acreditación es avalada por Pablo Francisco Coello Larco, el Director de Regulación y Monitoreo de Seguridad Privada. De acuerdo con el Acuerdo Ministerial Nro. 196, publicado en el Registro Oficial Nro. 148, se expide el Reglamento para Regular el Procedimiento Administrativo y Sancionatorio de las Compañías de Vigilancia y Seguridad Privada. Este reglamento establece el procedimiento administrativo para el otorgamiento del permiso de operación y funcionamiento de las compañías de vigilancia y seguridad privada.</p>
          <div className='page-about-section-intro-div-bar'> </div>
          <div className='page-about-section-intro-div-group-p'>
            <p className='page-about-section-intro-div-p'>Una empresa de seguridad privada especializada en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.</p>
            <p className='page-about-section-intro-div-p'>Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitoreo del teléfono.</p>
          </div>
        </div>
      </section>
      <section className='page-about-section-mission'>
        <div className='page-about-section-div'>
          <h3 className='page-about-section-div-h3'>nuestra misión</h3>
          <p className='page-about-section-div-p'>Ser una empresa de seguridad privada líder, reconocida por su inquebrantable credibilidad y confiabilidad. Nos dedicamos a salvaguarda bienes, muebles e inmuebles, así como la seguridad de empresas y personas. Lo hacemos empleando recursos profesionales altamente capacitados y tecnología, incluyendo sistemas de seguridad electrónica y monitoreo constante las 24 horas del día. Nuestro compromiso es brindar a nuestros clientes la tranquilidad necesaria para que puedan llevar a cabo sus actividades cotidianas con total confianza en su seguridad.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1517913451214-e22ce660e086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1946&q=80' alt='image abot' className='page-about-section-img' />
      </section>
      <section className='page-about-section-phrase'>
        <img src={trustAbout} alt='image abot' className='page-about-section-phrase-img' />
        <div className='page-about-section-phrase-div'>
          <h2 className='page-about-section-phrase-h2'><span>"</span>Quien tiene confianza en sí mismo va a ganar la confianza de los demás<span>"</span></h2>
          <p className='page-about-section-phrase-p'>(Leib Lazarow)</p>
        </div>
      </section>
      <section className='page-about-section-missionVision'>
        <div className='page-about-section-div'>
          <h3 className='page-about-section-div-h3'>nuestra visión</h3>
          <p className='page-about-section-div-p'>Nuestra visión es crear un entorno donde la seguridad sea sinónimo de tranquilidad, confianza y calidad de vida. Nos esforzamos por ofrecer soluciones personalizadas y superar las expectativas de nuestros clientes. A medida que avanzamos, nuestra pasión por la seguridad sigue siendo el motor que nos impulsa a crecer y expandir nuestra huella, garantizando un lugar más seguro para todos.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1542769494-0cc077eead4b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974' alt='image abot' className='page-about-section-img' />
      </section>
      <section className='page-about-section-partners'>
        <h3 className='page-about-section-partners-h3'>nuestros clientes</h3>
        <div className='page-about-section-div-partners'>
          <ul className='page-about-section-div-partners-ul'>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
            <li className='page-about-section-div-partners-ul-li'>
              <img src={westernUnion} alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About
