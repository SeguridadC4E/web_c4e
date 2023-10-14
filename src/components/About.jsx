import aboutImagePhrase from './../assets/img-content/about-section-phrase.jpg'
import trustAbout from './../assets/img-content/trust-about.jpg'

const About = () => {
  return (
    <main className='main-about'>
      <header className='main-about-header'>
        <div className='main-about-header-div'>
          <h3 className='main-about-header-title'>seguridad</h3>
          <h3 className='main-about-header-title'>protección</h3>
          <h3 className='main-about-header-title'>tecnología en seguridad</h3>
        </div>
        <p className='main-about-header-text'>Brindamos a nuestros clientes la tranquilidad necesaria para que puedan llevar a cabo sus actividades cotidianas con total confianza en su seguridad.</p>
      </header>
      <h2 className='main-abou-h2'>acerca de nosotros</h2>
      <section className='main-about-section-mission'>
        <div className='main-about-section-mission-div'>
          <h3 className='main-about-section-mision-div-h3'>nuestra misión</h3>
          <p className='main-about-section-mission-div-p'>Lorem similique quisquam sequi placeat ipsa inventore velit praesentium nihil ad distinctio recusandae magnam, fuga consequuntur expedita, deserunt deleniti.Modi rerum maxime debitis at distinctio quisquam, voluptatem necessitatibus praesentium recusandae. Distinctio, culpa? Dicta, soluta. Est minima sed veritatis, explicabo debitis asperiores labore voluptates assumenda corrupti, autem, at cupiditate. Saepe. Omnis temporibus consequuntur, officiis mollitia, incidunt provident saepe dolorum non ex a fugit ut ad deserunt atque commodi natus suscipit veniam. Laboriosam veritatis rerum maiores impedit tempora veniam, ex error.Hic facere maxime inventore tenetur corrupti reiciendis delectus consequuntur dolorum consequatur nemo ratione quaerat et eligendi recusandae expedita minima atque aliquam laboriosam, tempore rem sint libero culpa possimus. Adipisci, placeat? Voluptate nemo, in earum enim molestiae consectetur officiis. Id optio dolor reiciendis. Voluptatibus vero eligendi quasi illum tempore, nesciunt labore eaque maxime sit libero mollitia, eveniet, reiciendis veniam eos. Explicabo?</p>
        </div>
        <img src={aboutImagePhrase} alt='image abot' className='main-about-section-mission-img' />
      </section>
      <section className='main-about-section-phrase'>
        <img src={trustAbout} alt='image abot' className='main-about-section-phrase-img' />
        <div className='main-about-section-phrase-div'>
          <h2 className='main-about-section-phrase-h2'><span>"</span>Quien tiene confianza en sí mismo va a ganar la confianza de los demás<span>"</span></h2>
          <p className='main-about-section-phrase-p'>(Leib Lazarow)</p>
        </div>
      </section>
      <section className='main-about-section-vision'>
        <div className='main-about-section-vision-div'>
          <h3 className='main-about-section-visio-div-h3'>nuestra visión</h3>
          <p className='main-about-section-vision-div-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non rerum porro officiis similique quisquam sequi placeat ipsa inventore velit praesentium nihil ad distinctio recusandae magnam, fuga consequuntur expedita, deserunt deleniti.Modi rerum maxime debitis at distinctio quisquam, voluptatem necessitatibus praesentium recusandae. Distinctio, culpa? Dicta, soluta. Est minima sed veritatis, explicabo debitis asperiores labore voluptates assumenda corrupti, autem, at cupiditate. Saepe. Omnis temporibus consequuntur, officiis mollitia, incidunt provident saepe dolorum non ex a fugit ut ad deserunt atque commodi natus suscipit veniam. Laboriosam veritatis rerum maiores impedit tempora veniam, ex error.Hic facere maxime inventore tenetur corrupti reiciendis delectus consequuntur dolorum consequatur nemo ratione quaerat et eligendi recusandae expedita minima atque aliquam laboriosam, tempore rem sint libero culpa possimus. Adipisci, placeat? Voluptate nemo, in earum enim molestiae consectetur officiis. Id optio dolor reiciendis. Voluptatibus vero eligendi quasi illum tempore, nesciunt labore eaque maxime sit libero mollitia, eveniet, reiciendis veniam eos. Explicabo?</p>
        </div>
        <img src={aboutImagePhrase} alt='image abot' className='main-about-section-vision-img' />
      </section>
      <section className='main-about-section-partners'>
        <h3 className='main-about-section-partners-h3'>nuestros clientes</h3>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#F24444' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' /></svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#F24444' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' /></svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#F24444' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' /></svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#F24444' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' /></svg>
      </section>
    </main>
  )
}

export default About
