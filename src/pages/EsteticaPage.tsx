import HeroSectionComponents from '../components/hero/HeroSectionComponents'
import PageLayout from './layout/PageLayout'

import manicuras from '../assets/imagen_links_pages/estetica/manicuras.jpg'
import maquillaje from '../assets/imagen_links_pages/estetica/maquillaje.jpg'
import tratamietnofacial from '../assets/imagen_links_pages/estetica/tratamietnofacial.jpg'

import './styles/grid.css'
import { Link } from 'react-router-dom'
const EsteticaPage = () => {
  return (
    <>
      <HeroSectionComponents service='estetica' title="Descubre los tratamientos " />
      <PageLayout service='estetica'>
        <div className="grid-container">
          <div className="grid-item large-image">
            <Link to={""} >
              <p>Tratamiento faciales</p>
              <img src={tratamietnofacial} alt="Imagen 1" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item vertical">
            <Link to={""} >
              <p>Manicuras y Pedicuras</p>
              <img src={manicuras} alt="Imagen 1" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item vertical">
            <Link to={""} >
              <p>Depilacion</p>
              <img src={tratamietnofacial} alt="Imagen 1" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item horizontal">
            <Link to={""} >
              <p>Maquillaje</p>
              <img src={maquillaje} alt="Imagen 4" />
              <span></span>
            </Link>
          </div>
        </div >
      </PageLayout >
    </>

  )
}

export default EsteticaPage