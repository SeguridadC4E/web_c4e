import c4eLogo from './../assets/logoC4E.jpg'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={c4eLogo} alt='logo de la empresa de seguridad C4E' className='logo-img' />
      <div className='logo-div'>
        <h1 className='logo-h1'>cuji seguridad</h1>
        <h2 className='logo-h2'>del ecuador cia.ltda.</h2>
      </div>
    </div>
  )
}

export default Logo
