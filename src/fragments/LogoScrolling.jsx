import logoCruzAzul from './../assets/image-partners/f-cruz-azul.jpg'
import logoFarmaciasEconomicas from './../assets/image-partners/farmacias-economicas.png'
import logoJena from './../assets/image-partners/jena.png'
import logoMykRectificadora from './../assets/image-partners/myk-rectificadora.png'
import logoUep from './../assets/image-partners/uep.jpg'
import logoUep2 from './../assets/image-partners/uep.png'
import logoWesternUnion from './../assets/image-partners/western-union.jpeg'

const LogoScrolling = () => {
  return (
    <div className='fragment-slider'>
      <div className='fragment-slide-track'>
        <div className='fragment-slide'><img src={logoCruzAzul} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoFarmaciasEconomicas} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoJena} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoMykRectificadora} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoUep} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoWesternUnion} alt='Image 3' /></div>
        <div className='fragment-slide'><img src={logoUep2} alt='Image 3' /></div>
      </div>
    </div>
  )
}

export default LogoScrolling
