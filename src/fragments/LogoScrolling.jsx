import logoCruzAzul from './../assets/image-partners/f-cruz-azul.jpg'
import logoFarmaciasEconomicas from './../assets/image-partners/farmacias-economicas.png'
import logoJena from './../assets/image-partners/jena.png'
import logoMykRectificadora from './../assets/image-partners/myk-rectificadora.png'
import logoUep from './../assets/image-partners/uep.jpg'
import logoUep2 from './../assets/image-partners/uep.png'
import logoWesternUnion from './../assets/image-partners/western-union.jpeg'

const LogoScrolling = () => {
  return (
    <ul className='fragment-logo-scrollingd-ul'>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoCruzAzul} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoFarmaciasEconomicas} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoJena} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoMykRectificadora} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoUep} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoWesternUnion} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
      <li className='fragment-logo-scrollingd-ul-li'>
        <img src={logoUep2} alt='Image 3' className='fragment-logo-scrollingd-ul-li-img' />
      </li>
    </ul>
  )
}

export default LogoScrolling
