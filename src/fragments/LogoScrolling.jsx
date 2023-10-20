import { useContext } from 'react'
import { GlobalContext } from '../provider/Provider'

const LogoScrolling = () => {
  const { pageAbout } = useContext(GlobalContext)
  const { logoScroll } = pageAbout
  console.log(logoScroll)

  return (
    <ul className='page-about-section-div-partners-ul'>
		{ logoScroll.map =(id, alter, address)=>
<li className='page-about-section-div-partners-ul-li'>
        	  <img src='./assets/only-logo-c4e.png' alt='Image 3' className='page-about-section-div-parthers-ul-li-img' />
      		</li>
			}
    </ul>
  )
}

export default LogoScrolling
