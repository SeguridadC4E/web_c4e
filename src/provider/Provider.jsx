// import { v4 as uuidv4 } from 'uuid'
import { createContext } from 'react'

const bbdd = {
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
