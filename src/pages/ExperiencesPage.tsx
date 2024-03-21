import { Link } from "react-router-dom"

/*Components*/
import HeroSectionComponents from "../components/hero/HeroSectionComponents"
import PageLayout from "./layout/PageLayout"

/*Imagenes*/
import nuevoestilo from '/assets/imagen_links_pages/experiencia/nuevoestilo.jpg'
import makeup from '/assets/imagen_links_pages/experiencia/makeup.jpg'
import asesoramientoimagen from '/assets/imagen_links_pages/experiencia/asesoramientoimagen.jpg'

/*Styles*/
import './styles/grid.css'


const ExperiencesPage = () => {
    return (
        <>
            <HeroSectionComponents service='experiencia' title="Vive una experiencia de belleza" />
            <PageLayout service='experiencia'>
                <div className="grid-container">
                    <div className="grid-item large-image">
                        <Link to={""} >
                            <p>Nuevos Estilos</p>
                            <img src={nuevoestilo} alt="Imagen 1" />
                            <span></span>
                        </Link>
                    </div>
                    <div className="grid-item">
                        <Link to={""} >
                            <p>Curso Maquillaje</p>
                            <img src={makeup} alt="Imagen 2" />
                            <span></span>

                        </Link>
                    </div>
                    <div className="grid-item vertical">
                        <Link to={""} >
                            <p>Asesoria de imagen</p>
                            <img src={asesoramientoimagen} alt="Imagen 3" />
                            <span></span>

                        </Link>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}

export default ExperiencesPage