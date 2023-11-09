import { v4 as uuidv4 } from 'uuid'
import { createContext } from 'react'

const bbdd = {
  pageMain: {
    sectionIntro: [ // ❓ agregar en el main
      'Protegemos locales comerciales y residencias',
      'Instalación y mantenimientos de sistemas de seguridad',
      'Nuestro objetivo es proporcionar soluciones de seguridad integrales que protejan a nuestros clientes y les den tranquilidad. Gracias a nuestra experiencia y compromiso con la excelencia, somos un socio confiable en el ámbito de la seguridad'
    ],
    sectionAbout: [
      { title: 'C4E' },
      {
        description:
        [
          'Una empresa de seguridad privada especializada en proporcionar protección para locales comerciales y garantizar la seguridad en residencias. Ofrecemos un sistema de monitoreo las 24 horas, siempre preparados para atender a nuestros clientes.',
          'Además, nos encargamos de la instalación y el mantenimiento de sistemas de seguridad, alarmas, integración de modulos inteligentes avanzados que permiten la vigilancia de locales mediante cámaras de seguridad, con la posibilidad de monitoreo...'
        ]
      }
    ],
    sectionServices: [ // ✅
      {
        id: uuidv4(),
        imageBackground: 'https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlter: 'imagen de una guardia de seguridad',
        title: 'guardia de seguridad'
      },
      {
        id: uuidv4(),
        imageBackground: 'https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlter: 'imagen de seguridad privada',
        title: 'seguridad privada'
      },
      {
        id: uuidv4(),
        imageBackground: 'https://images.unsplash.com/photo-1581087724844-037b13e16b0b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlter: 'imagen del monitoreo 24 horas',
        title: 'monitoreo 24 horas'
      },
      {
        id: uuidv4(),
        imageBackground: 'https://images.unsplash.com/photo-1591216105236-5ba45970702a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlter: 'imagen de monitoreo motorizado',
        title: 'monitoreo motorizado'
      },
      {
        id: uuidv4(),
        imageBackground: 'https://images.unsplash.com/photo-1570044389283-6713c3b1c48b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlter: 'imagen de instalacion de sistemas de seguridad',
        title: 'instalacion de sistemas de seguridad'
      }
    ]
  },
  pageAbout: { // ❓
    logoScroll: [
      // { id: uuidv4(), alter: 'logo de la empresa farmacia cruz azul', address: './../assets/image-partners/western-union.jpeg' },
      // { id: uuidv4(), alter: 'logo de la empresa farmacias economicas', address: './assets/image-partners/farmacias-economicas.png' },
      // { id: uuidv4(), alter: 'logo de la empresa jena', address: { logowestern } }
      // { id: uuidv4(), alter: 'logo de la empresa myk rectificadora', address: './assets/image-partners/myk-rectificadora.png' },
      // { id: uuidv4(), alter: 'logo de la unidad edictiva picaihua', address: './assets/image-partners/uep-jpg' },
      // { id: uuidv4(), alter: 'logo de la empresa western union', address: './assets/image-partners/western-union.jpeg' },
      // { id: uuidv4(), alter: 'logo de la unidad educativa picauihua', address: './assets/image-partners/uep-png' }
    ]
  }
}

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbdd}>
      {children}
    </GlobalContext.Provider>
  )
}
