import { v4 as uuidv4 } from 'uuid'
import { createContext } from 'react'

const bbdd = {
  pageMain: {
    sectionServices: [
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
  pageAbout: {
    logoScroll: [
      // { id: uuidv4(), alter: 'logo de la empresa farmacia cruz azul', address: './../assets/image-partners/western-union.jpeg' },
      // { id: uuidv4(), alter: 'logo de la empresa farmacias economicas', address: './assets/image-partners/farmacias-economicas.png' },
      // { id: uuidv4(), alter: 'logo de la empresa jena', address: { logowestern } }
      // { id: uuidv4(), alter: 'logo de la empresa myk rectificadora', address: './assets/image-partners/myk-rectificadora.png' },
      // { id: uuidv4(), alter: 'logo de la unidad edictiva picaihua', address: './assets/image-partners/uep-jpg' },
      // { id: uuidv4(), alter: 'logo de la empresa western union', address: './assets/image-partners/western-union.jpeg' },
      // { id: uuidv4(), alter: 'logo de la unidad educativa picauihua', address: './assets/image-partners/uep-png' }
    ]
  },
  pageServices: {
    cardServices: [
      {
        id: uuidv4(),
        image: {
          imageService: 'https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de guardia de seguridad'
        },
        information: {
          number: '01',
          title: 'seguridad',
          subtitle: 'guardia de seguridad',
          description: 'Lorem es la descripcion del servicio de guardia de seguridad'
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_blank '
        }
      },
      {
        id: uuidv4(),
        image: {
          imageService: 'https://images.unsplash.com/photo-1617940673880-038ac787aa32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de seguridad privada'
        },
        information: {
          number: '02',
          title: 'seguridad',
          subtitle: 'seguridad privada',
          description: 'Lorem es la descripcion del servicio de la seguridad privada'
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_blank '
        }
      },
      {
        id: uuidv4(),
        image: {
          imageService: 'https://images.unsplash.com/photo-1581087724844-037b13e16b0b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de monitore las 24 horas'
        },
        information: {
          number: '03',
          title: 'monitoreo',
          subtitle: 'monitoreo 24 horas',
          description: 'Lorem es la descripcion del servicio de monitoreo de las 24 horas'
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_blank '
        }
      },
      {
        id: uuidv4(),
        image: {
          imageService: 'https://images.unsplash.com/photo-1591216105236-5ba45970702a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de monitore motorizado'
        },
        information: {
          number: '04',
          title: 'monitoreo',
          subtitle: 'monitoreo motorizado',
          description: 'Lorem es la descripcion del servicio de monitore motorizado'
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_blank '
        }
      },
      {
        id: uuidv4(),
        image: {
          imageService: 'https://images.unsplash.com/photo-1570044389283-6713c3b1c48b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de sistemas de sistemas de seguridad'
        },
        information: {
          number: '05',
          title: 'seguridad',
          subtitle: 'instalación de sistemas de seguridad',
          description: 'Lorem es la descripcion del servicion de sistemas de seguridad'
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_blank '
        }
      }
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
