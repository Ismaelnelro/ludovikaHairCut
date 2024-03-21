import HeroSectionComponents from '../components/hero/HeroSectionComponents'
import PageLayout from './layout/PageLayout'



import brasil from '../assets/imagen_links_pages/salon/brasil.jpg'
import buenosaires from '../assets/imagen_links_pages/salon/buenosaires.jpg'
import mexico from '../assets/imagen_links_pages/salon/mexico.jpg'
import './styles/grid.css'
import { Link } from 'react-router-dom'

const SalonPage = () => {
  return (
    <>
      <HeroSectionComponents service='salon' title="Descubre nuestros Salones " />
      <PageLayout service='salon'>
        <div className="grid-container">
          <div className="grid-item large-image">
            <Link to={""} >
              <p>Buenos Aires</p>
              <img src={buenosaires} alt="Imagen 1" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item">
            <Link to={""} >
              <p>Cancun</p>
              <img src={mexico} alt="Imagen 2" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item vertical">
            <Link to={""} >
              <p>Mendoza</p>
              <img src={buenosaires} alt="Imagen 3" />
              <span></span>
            </Link>
          </div>
          <div className="grid-item horizontal">
            <Link to={""} >
              <p>San Paolo</p>
              <img src={brasil} alt="Imagen 4" />
              <span></span>
            </Link>
          </div>

        </div>
      </PageLayout>
    </>

  )
}

export default SalonPage