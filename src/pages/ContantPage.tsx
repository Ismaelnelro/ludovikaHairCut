/*Components*/
import HeaderComponent from "../components/header/HeaderComponent"
/*Styles*/
import './styles/contacto.css'


const ContantPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className='section-contacto'>
        <form action="" className="form">
          <div className="input-text">
            <h1>ESTAMOS A TU DISPOSICIÓN, ¿HABLAMOS?</h1>
            <p>Si quieres recibir las últimas tendencias en moda y belleza, promociones y estar al día de los eventos más cool de nuestra peluquería en Barcelona, ¡suscríbete!</p>
          </div>
          <div className='input-group'>
            <input className='input-subscription' placeholder='Nombre' type="text" />
            <input className='input-subscription' placeholder='Apellido' type="text" />
            <input className='input-subscription' placeholder='Email' type="email" />
            <input className='input-subscription' placeholder='Telefono' type="text" />
          </div>
          <div className="input-btn">
            <button className='btn-subscription'>Enviar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContantPage