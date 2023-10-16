
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function App() {


  return (

    <div>
      <nav className='nav__items'>
        <ul className='nav__ul'>
          <li className='nav__home'><a href="#">Inicio</a></li>
          <li className='nav__aboutme'><a href="#tittle__aboutme">Acerca de mi</a></li>
          <li className='nav__abilities'><a href="#tittle__abilities">Habilidades</a></li>
          <li className='nav__projects'><a href="#tittle__proyectos">Poyectos</a></li>

        </ul>
        <ul className='nav__ul__contact'>
          <li className='nav__contact'><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section className='section__aboutme'>
        <dvi className="tittle">
          <h2 id='tittle__aboutme'>Acerca de mi</h2>
        </dvi>
        <div className='aboutme__item'>
          <img className='aboutme__img' src="/yo.jpg" alt="" />
          <p className='aboutme__p' align="justify">
            Soy desarrollador <strong>
              <font color="white">
                Front-end </font>
            </strong>
            me llamo Santiago Valle, tengo 28 años de edad, resido en la ciudad de Machala, Ecuador,
            me apasiona el mundo de la programación, por ende me encuentro
            en busquedad de proyectos que desafien mi intelecto y habilidades.
            
          </p>

        </div>
        <div className='item__download'>
          <a href='/cv programacion.pdf' className="btn"> <button className='btn__cv'>
            Descargar CV</button>
          </a>
        </div>



        <dvi className="tittle">
          <h2 id='tittle__abilities'> Habilidades</h2>
        </dvi>
        <div className='abilities'>
          <img className='abilities__items css' src="/css.png" alt="" />
          <img className='abilities__items html' src="/html.png" alt="" />
          <img className='abilities__items react' src="/react.png" alt="" />
          <img className='abilities__items js' src="/js.jpg" alt="" />
        </div>

        <div className='tittle proyectos'>
          <h2 id="tittle__proyectos">Proyectos</h2>
        </div>
        <div className='carrousel'>
          <div className='carrousel__item' id="carrousel__item1">
            <div className='carrousel__card a'>
              <a href="https://classy-conkies-b13309.netlify.app/">
                <img className="img temperatura" src="/temperatura.png" alt="" />
              </a>
            </div>
            <div className='carrousel__arrow'>
              <a className="arrows" href='#carrousel__item3'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <a className="arrows" href='#carrousel__item2'>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </div>
          <div className='carrousel__item' id="carrousel__item2">
            <div className='carrousel__card b'>
              <a href="https://calm-taiyaki-97bc4e.netlify.app/">
                <img className="img rick" src="/rickymorty.png" alt="" />
              </a>
            </div>
            <div className='carrousel__arrow'>
              <a className="arrows" href='#carrousel__item1'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <a className="arrows" href='#carrousel__item3'>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>

            </div>
          </div>
          <div className='carrousel__item' id="carrousel__item3">
            <div className='carrousel__card c'>
              < a href="https://academlo-project-santiago.netlify.app/">
                <img className="img" src="/ecomerce.png" alt="" />
              </a>

            </div>
            <div className='carrousel__arrow'>
              <a className="arrows" href='#carrousel__item2'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <a className="arrows" href='#carrousel__item1'>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <h2 className='tittle' id='contacto'> Contacto </h2>
      <form action="https://formsubmit.co/madensantiago169@gmail.com" method="POST" className='item__form'>
        <label className='form__text name'> Nombre</label>
        <input className='form__writer name1' name="name" placeholder="Cual es tu nombre?" type="text"></input>
        <label className='form__text e-mail'> E-mail</label>
        <input className='form__writer e-mail1' name="email" placeholder="Cual es tu e-mail?" type="text"></input>
        <label className='form__text message'> Mensaje</label>
        <input className='form__writer message1' name="comments"type="text"></input>
        <button className='form__btn'> Enviar</button>
      </form>



      <footer className='item__footer'>

        <div>
          <div className='redes__item'> Redes Sociales</div>
          <div className='redes'>
            <a href='https://github.com/Santiago0210'>
              <img src="/git (1).svg" alt="" />
            </a>
            <a href="https://wa.link/7o05af">
              <img src="/whatsapp.svg" alt="" />
            </a>
            <a href="https://twitter.com/Dangerous99999">
              <img src="/twitter.svg" alt="" />
            </a>
            <a href="https://app.netlify.com/teams/santiago0210/overview">
              <img  src="/netlify.png" alt="" />
            </a>
          </div>

        </div>

      </footer>


    </div>

  )
}

export default App
