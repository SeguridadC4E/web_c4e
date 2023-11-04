import logoCruzAzul from './../assets/image-partners/f-cruz-azul.jpg'
import logoFarmaciasEconomicas from './../assets/image-partners/farmacias-economicas.png'
import logoJena from './../assets/image-partners/jena.png'
import logoMykRectificadora from './../assets/image-partners/myk-rectificadora.png'
import logoUep from './../assets/image-partners/uep.jpg'
import logoWesternUnion from './../assets/image-partners/western-union.jpeg'

const LogoScrolling = () => {
  return (
    <div className='fragment-logos'>
      <div className='fragment-logos-slide'>
        <img src={logoJena} alt='Image 3' />
        <img src={logoFarmaciasEconomicas} alt='Image 3' />
        <img src={logoCruzAzul} alt='Image 3' />
        <img src={logoWesternUnion} alt='Image 3' />
        <img src={logoUep} alt='Image 3' />
        <img src={logoMykRectificadora} alt='Image 3' />
      </div>
      <div className='fragment-logos-slide'>
        <img src={logoJena} alt='Image 3' />
        <img src={logoFarmaciasEconomicas} alt='Image 3' />
        <img src={logoCruzAzul} alt='Image 3' />
        <img src={logoWesternUnion} alt='Image 3' />
        <img src={logoUep} alt='Image 3' />
        <img src={logoMykRectificadora} alt='Image 3' />
      </div>
    </div>
  )
}

export default LogoScrolling
