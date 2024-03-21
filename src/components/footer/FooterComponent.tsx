
/*Styles*/ 
import './footercomponent.css';

const FooterComponent = () => {
  return (
    <footer className='footer-container'>
      <section className='footer-subscription'>
        <p>Si quieres recibir las últimas tendencias en moda y belleza, promociones y estar al día de los eventos más cool de nuestra peluquería en Buenos Aires, ¡suscríbete!</p>
        <div className='input-group'>
          <input className='input-subscription' placeholder='Nombre' type="text" />
          <input className='input-subscription' placeholder='Email' type="email" />
        </div>
        <button className='btn-subscription'>Enviar</button>
      </section>

      <section className='social-section'>
        <div className='social'>
          <p>Síguenos</p>
          <a href="#" className='social-link'>FACEBOOK</a>
          <a href="#" className='social-link'>INSTAGRAM</a>
          <a href="#" className='social-link'>TWITTER</a>
        </div>
        <div className='social'>
          <p>Servicios</p>
          <a href="#" className='social-link'>  PELUQUERÍA MUJER</a>
          <a href="#" className='social-link'>  PELUQUERÍA VIP</a>
          <a href="#" className='social-link'>  ESTETICA</a>
          <a href="#" className='social-link'>  NOVIAS</a>
        </div>
      </section>

      <section className='location-section'>
        <span className="location-icon material-symbols-outlined">
          location_on
        </span>

        <a href="" className='location-item'>
          <strong>LUDOVICKA- BRASIL</strong>
          <br />
          Telf. 931 463 510
          Fontana, 1129
          107 - Brasil
          Ver en Google Maps »
        </a>
        <a href="" className='location-item'>
          <strong>LUDOVICKA- BUENOS AIRES ARGENTINA</strong>
          <br />
          Telf. 931 463 510
          Av. Termis, 129
          011 - Buenos Aires
          Ver en Google Maps »
        </a>
        <a href="" className='location-item'>
          <strong>LUDOVICKA- MENDOZA ARGENTINA</strong>
          <br />
          Telf. 931 463 510
          Pl. franz dever, 4c
          41427 - Mendoza
          Ver en Google Maps »
        </a>
        <a href="" className='location-item'>
          <strong>LUDOVICKA- MEXICO</strong>
          <br />
          Telf. 931 463 510
          Calle. Taenius, 001
          1DaE - Mexico
          Ver en Google Maps »
        </a>
      </section>

    </footer>
  )
}

export default FooterComponent;
