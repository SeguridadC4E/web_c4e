import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './fragments/Footer'
import Main from './components/Main'
import Headboard from './fragments/Headboard'

function App () {
  return (
    <HashRouter>
      <Headboard />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sobre-nosotros' element={<About />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/galeria' element={<Gallery />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
