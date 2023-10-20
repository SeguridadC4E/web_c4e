import { v4 as uuidv4 } from 'uuid'
import { createContext } from 'react'

const bbdd = {
  pageAbout: {
    logoScroll: [
      { id: uuidv4(), alter: 'logo de la empresa farmacia cruz azul', address: './assets/image-partners/f-cruz-azul.jpg' },
      { id: uuidv4(), alter: 'logo de la empresa farmacia cruz azul', address: './assets/image-partners/f-cruz-azul.jpg' },
      { id: uuidv4(), alter: 'logo de la empresa farmacia cruz azul', address: './assets/image-partners/f-cruz-azul.jpg' }
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
