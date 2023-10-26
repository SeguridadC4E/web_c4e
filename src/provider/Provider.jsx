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
          author: 'Rayner Simpon',
          url: 'https://unsplash.com/es/@rayner',
          imageService: 'https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen de una guardia de seguridad dentro de un local comercial'
        },
        service: {
          number: '01',
          title: 'seguridad',
          subtitle: 'guardia de seguridad',
          description: [
            'Nuestro compromiso no se limita a la protección física. También nos esforzamos por crear un ambiente seguro y tranquilo para todos, lo que incluye la prevención de incidentes y la respuesta rápida a cualquier situación de emergencia.',
            'Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades específicas y proporcionar soluciones de seguridad personalizadas. Nuestro objetivo es superar las expectativas, asegurando que cada individuo y propiedad bajo nuestra protección esté seguro y bien cuidado.'
          ],
          details: {
            title: 'servicio de guardia de seguridad',
            imagen: [
              {
                id: uuidv4(),
                author: 'Guilherme Bustamante',
                url: 'https://unsplash.com/es/@guibusted',
                imagen: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?auto=format&fit=crop&q=80&w=1494&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardia de seguridad dentro de un banco'
              },
              {
                id: uuidv4(),
                author: 'Colin',
                url: 'https://unsplash.com/es/@fuerte',
                imagen: 'https://images.unsplash.com/photo-1576807100081-6e12175343c6?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardia de seguridad en la azotea'
              },
              {
                id: uuidv4(),
                author: 'Vander Films',
                url: 'https://unsplash.com/es/@vanderfilms',
                imagen: 'https://images.unsplash.com/photo-1640936346777-fcf8fac307cd?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardia de seguridad dentro de un banco'
              }
            ],
            firstDescription: 'Contamos con un equipo de profesionales altamente calificados, especializados en garantizar la seguridad tanto de personas como de propiedades. Nuestro alcance se extiende a una variedad de entornos, desde residencias privadas hasta establecimientos comerciales y corporativos, en los que brindamos nuestros servicios de seguridad.',
            secondDescription: 'Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades específicas y proporcionar soluciones de seguridad personalizadas. Nuestro objetivo es superar las expectativas, asegurando que cada individuo y propiedad bajo nuestra protección esté seguro y bien cuidado.',
            subtile: 'trabajamos con todo tipo de entidades comerciales',
            company: ['bancos y cooperativas', 'centros comerciales', 'comercios e industrias', 'residencias e instituciones', 'resguardo en eventos festivos']
          }
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_self '
        }
      },
      {
        id: uuidv4(),
        image: {
          author: 'Craing Whitehead',
          url: 'https://unsplash.com/es/@sixstreetunder',
          imageService: 'https://images.unsplash.com/photo-1523294557-3637e1db3f33?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen de un guardaespalda'
        },
        service: {
          number: '02',
          title: 'seguridad',
          subtitle: 'seguridad privada',
          description: [
            'Nuestro equipo de profesionales altamente capacitados en seguridad está dedicado a brindarte un acompañamiento constante, una defensa robusta y una protección integral, con el objetivo principal de prevenir que seas víctima de agresiones o actos delictivos. Nuestro compromiso va más allá de la simple vigilancia; nos enfocamos en garantizar tu bienestar y tranquilidad.',
            'La protección que ofrecemos se centra en tres aspectos fundamentales: la preservación de tu vida, la salvaguarda de tu integridad física y la defensa de tu libertad personal. Como beneficiario de nuestro servicio, puedes tener la certeza de que tu seguridad es nuestra máxima prioridad. Estamos aquí para ti, para protegerte y defenderte, permitiéndote vivir y moverte libremente con la confianza de que estás en manos seguras.'
          ],
          details: {
            title: 'servicio de guardaespaldas',
            imagen: [
              {
                id: uuidv4(),
                author: 'Craing Whitehead',
                url: 'https://unsplash.com/es/@sixstreetunder',
                service: 'https://images.unsplash.com/photo-1523294557-3637e1db3f33?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardaespalda'
              },
              {
                id: uuidv4(),
                author: 'Drew Harbour',
                url: 'https://unsplash.com/es/@drew_harbour',
                imagen: 'https://images.unsplash.com/photo-1617940673880-038ac787aa32?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de dos guardaespaldas vigilando desde la azotea de un edifico'
              },
              {
                id: uuidv4(),
                author: 'Job Moses',
                url: 'https://unsplash.com/es/@security_concepts_services',
                imagen: 'https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardaespalda'
              }
            ],
            firstDescription: 'Nuestro equipo de profesionales altamente capacitados en seguridad está dedicado a brindarte un acompañamiento constante, una defensa robusta y una protección integral, con el objetivo principal de prevenir que seas víctima de agresiones o actos delictivos. Nuestro compromiso va más allá de la simple vigilancia; nos enfocamos en garantizar tu bienestar y tranquilidad.',
            secondDescription: 'La protección que ofrecemos se centra en tres aspectos fundamentales: la preservación de tu vida, la salvaguarda de tu integridad física y la defensa de tu libertad personal. Como beneficiario de nuestro servicio, puedes tener la certeza de que tu seguridad es nuestra máxima prioridad. Estamos aquí para ti, para protegerte y defenderte, permitiéndote vivir y moverte libremente con la confianza de que estás en manos seguras.',
            subtile: 'enfocados en salvaguardad tu integridad física en:',
            company: ['Eventos culturales', 'Eventos deportivos', 'Eventos empresariales o corporativos', 'Eventos políticos']
          }
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_self '
        }
      },
      {
        id: uuidv4(),
        image: {
          author: 'Tai Jyun Chang',
          url: 'https://unsplash.com/es/@tai_jyun',
          imageService: 'https://images.unsplash.com/photo-1560381328-696dda198bae?auto=format&fit=crop&q=80&w=1563&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen de un señor que indica cómo funciona el monitoreo 24 horas'
        },
        service: {
          number: '03',
          title: 'monitoreo',
          subtitle: 'monitoreo 24 horas',
          description: [
            'Nuestros sistemas de monitoreo, operativos las 24 horas del día, los 7 días de la semana, nos permiten reaccionar de manera inmediata ante cualquier eventualidad. Estos sistemas están diseñados para dar seguimiento a una amplia gama de irregularidades que pueden surgir, incluyendo robos, situaciones de pánico, incendios, inundaciones o emergencias médicas.',
            'Gracias a la vigilancia constante y a la tecnología de punta que utilizamos, somos capaces de detectar las señales de alarma en tiempo real. Esta detección temprana nos permite reaccionar de inmediato, minimizando el impacto de cualquier incidente y asegurando la seguridad y tranquilidad de nuestros clientes.'
          ],
          details: {
            title: 'Monitoreo las 24/horas',
            imagen: [
              {
                id: uuidv4(),
                author: 'Tai Jyun Chang',
                url: 'https://unsplash.com/es/@tai_jyun',
                imageService: 'https://images.unsplash.com/photo-1560381328-696dda198bae?auto=format&fit=crop&q=80&w=1563&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageAlter: 'imagen de un señor que indica cómo funciona el monitoreo 24 horas'
              },
              {
                id: uuidv4(),
                author: 'Some Tale',
                url: 'https://unsplash.com/es/@some_tale',
                imagen: 'https://images.unsplash.com/photo-1599418176874-7bddcf1e13bb?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de una madre con su hijo detrás de un arbusto'
              },
              {
                id: uuidv4(),
                author: 'Pilar Rubio',
                url: 'https://unsplash.com/es/@rubiopil',
                imagen: 'https://images.unsplash.com/photo-1655847849132-036b4a1de044?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de una calle transitada segura'
              }
            ],
            description: [
              'Gracias a la vigilancia constante y a la tecnología de punta que utilizamos, somos capaces de detectar las señales de alarma en tiempo real. Esta detección temprana nos permite reaccionar de inmediato, minimizando el impacto de cualquier incidente y asegurando la seguridad y tranquilidad de nuestros clientes.',
              'Este nivel de seguridad proactiva es un beneficio invaluable para nuestros clientes. Les permite continuar con sus actividades diarias con la confianza de saber que están protegidos por un sistema de monitoreo eficiente y confiable. Nuestro compromiso es brindarles un entorno seguro y protegido en todo momento.'
            ],
            subtile: 'Monitoreo 24/horas 7 días a la semana:',
            company: ['Bancos', 'Cooperativas', 'Comercios', 'Residencias', 'Instituciones']
          }
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_self '
        }
      },
      {
        id: uuidv4(),
        image: {
          author: 'Jusdevoyage',
          url: 'https://unsplash.com/es/@jusdevoyage',
          imageService: 'https://images.unsplash.com/photo-1591216105236-5ba45970702a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen del servicio de monitore motorizado'
        },
        information: {
          number: '04',
          title: 'monitoreo',
          subtitle: 'monitoreo motorizado',
          description: [
            'Nuestro dedicado equipo de profesionales se encarga de realizar monitoreos constantes en todas las áreas donde brindamos nuestros servicios. Este monitoreo se realiza siguiendo una ruta predefinida que abarca todos los lugares clave para garantizar la máxima seguridad.',
            'En caso de activación de las alarmas, contamos con un especialista motorizado listo para responder. Este especialista está altamente capacitado y sigue un conjunto estricto de normas y procedimientos diseñados para disuadir a cualquier criminal que pueda poner en riesgo la integridad de nuestros clientes. Su rápida respuesta y su presencia en el lugar pueden ser cruciales para prevenir incidentes y garantizar la seguridad de nuestros clientes.'
          ],
          details: {
            title: 'Monitoreo motorizado',
            imagen: [
              {
                id: uuidv4(),
                author: 'Jakob Owens',
                url: 'https://unsplash.com/es/@jakobowens1',
                image: 'https://images.unsplash.com/photo-1632187978208-3c1717e0f643?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen del motorizado escoltando a un cliente importante'
              },
              {
                id: uuidv4(),
                author: 'Jakob Owens',
                url: 'https://unsplash.com/es/@jakobowens1',
                imagen: 'https://images.unsplash.com/photo-1644186194219-479cf0911e3f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen del motorizado realizando la ronda en una bar'
              },
              {
                id: uuidv4(),
                author: 'Jusdevoyage',
                url: 'https://unsplash.com/es/@jusdevoyage',
                image: 'https://images.unsplash.com/photo-1591216105236-5ba45970702a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen del servicio de monitore motorizado'
              }
            ],
            description: [
              'Cada supervisor tiene asignada una locación específica, donde realiza un recorrido exhaustivo para verificar que todo esté en orden. Su presencia no solo sirve para cambiar el estado del ambiente, sino también para asegurar que se mantenga la tranquilidad y el orden.',
              'En caso de activación de las alarmas, contamos con un especialista motorizado listo para responder. Este especialista está altamente capacitado y sigue un conjunto estricto de normas y procedimientos diseñados para disuadir a cualquier criminal que pueda poner en riesgo la integridad de nuestros clientes. Su rápida respuesta y su presencia en el lugar pueden ser cruciales para prevenir incidentes y garantizar la seguridad de nuestros clientes.'
            ],
            subtile: 'Monitoreo por motorizado:',
            company: ['Bancos', 'Cooperativas', 'Locales Comerciales', 'Residencias', 'Instituciones Financieras']
          }
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_self '
        }
      },
      {
        id: uuidv4(),
        image: {
          author: 'Florian Olivo',
          url: 'https://unsplash.com/es/@florianolv',
          imageService: 'https://images.unsplash.com/photo-1570044389283-6713c3b1c48b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlter: 'imagen de camaras de seguridad'
        },
        service: {
          number: '05',
          title: 'seguridad',
          subtitle: 'instalación de sistemas de seguridad',
          description: [
            '',
            ''
          ],
          details: {
            title: 'servicio de guardia de seguridad',
            imagen: [
              {
                id: uuidv4(),
                author: 'Jacek Janiczak',
                url: 'https://unsplash.com/es/@jacekjaniczak',
                imagen: 'https://images.unsplash.com/photo-1697040084093-905a66f3d23d?auto=format&fit=crop&q=80&w=1564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de una casa vigilada con una camara'
              },
              {
                id: uuidv4(),
                author: 'André Spilborghs',
                url: 'https://unsplash.com/es/@andrespil',
                imagen: 'https://images.unsplash.com/photo-1530240852689-f7a9c6d9f6c7?auto=format&fit=crop&q=80&w=1370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1576807100081-6e12175343c6?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un tecnico instalando un cerco electrico'
              },
              {
                id: uuidv4(),
                author: 'David Cain',
                url: 'https://unsplash.com/es/@davidcainphoto',
                imagen: 'https://images.unsplash.com/photo-1665242043190-0ef29390d289?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alter: 'imagen de un guardia de seguridad dentro de un banco'
              }
            ],
            firstDescription: 'Contamos con un equipo de profesionales altamente calificados, especializados en garantizar la seguridad tanto de personas como de propiedades. Nuestro alcance se extiende a una variedad de entornos, desde residencias privadas hasta establecimientos comerciales y corporativos, en los que brindamos nuestros servicios de seguridad.',
            secondDescription: 'Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades específicas y proporcionar soluciones de seguridad personalizadas. Nuestro objetivo es superar las expectativas, asegurando que cada individuo y propiedad bajo nuestra protección esté seguro y bien cuidado.',
            subtile: 'trabajamos con todo tipo de entidades comerciales',
            company: ['bancos y cooperativas', 'centros comerciales', 'comercios e industrias', 'residencias e instituciones', 'resguardo en eventos festivos']
          }
        },
        button: {
          title: 'más informarción',
          rel: 'noopener',
          referrerpolicy: 'no-referrer',
          target: '_self '
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
