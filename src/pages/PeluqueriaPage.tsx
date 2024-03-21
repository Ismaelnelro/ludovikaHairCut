import HeroSectionComponents from '../components/hero/HeroSectionComponents'
import PageLayout from './layout/PageLayout'


import alisado from '../assets/imagen_links_pages/peluqueria/alisado.png'
import brashing from '../assets/imagen_links_pages/peluqueria/brushing.jpg'
import color from '../assets/imagen_links_pages/peluqueria/color.jpg'
import corte from '../assets/imagen_links_pages/peluqueria/corte.jpg'
import mechas from '../assets/imagen_links_pages/peluqueria/mechas.jpg'

import './styles/grid.css'
import { Link } from 'react-router-dom'
const PeluqueriaPage = () => {
    return (

        <>
            <HeroSectionComponents service='peluqueria' title="Vive tu momento" />
            <PageLayout service='peluqueria'>
                <div className="grid-container">
                    <div className="grid-item large-image">
                        <Link to={""} >
                            <p>color</p>
                            <img src={color} alt="Imagen 1" />
                            <span></span>
                        </Link>
                    </div>
                    <div className="grid-item">
                        <Link to={""} >
                            <p>corte</p>
                            <img src={corte} alt="Imagen 2" />
                            <span></span>
                        </Link>
                    </div>
                    <div className="grid-item ">
                        <Link to={""} >
                            <p>brushing</p>
                            <img src={brashing} alt="Imagen 3" />
                            <span></span>
                        </Link>
                    </div>
                    <div className="grid-item horizontal">
                        <Link to={""} >
                            <p>mechas</p>
                            <img src={mechas} alt="Imagen 4" />
                            <span></span>
                        </Link>
                    </div>
                    <div className="grid-item ">
                        <Link to={""} >
                            <p>alisado</p>
                            <img src={alisado} alt="Imagen 4" />
                            <span></span>
                        </Link>
                    </div>
                </div>
            </PageLayout>

        </>

    )
}

export default PeluqueriaPage