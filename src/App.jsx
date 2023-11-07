import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './page/Main'
import About from './page/About'
import Services from './page/Services'
import DetailServices from './page/DetailServices'
import Contact from './page/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Headboard from './components/Headboard'

function App () {
  return (
    <HashRouter>
      <Headboard />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sobre-nosotros' element={<About />} />
        <Route path='/servicios' element={<Services />}>
          <Route path='/servicios/:id' element={<DetailServices />} />
        </Route>
        <Route path='/galeria' element={<Gallery />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
