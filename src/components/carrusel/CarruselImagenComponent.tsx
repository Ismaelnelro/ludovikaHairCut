/*Imagens nosotros*/
import estetica from '/assets/estetica.jpg'
import peluqueria from '/assets/peluqueria.jpg'
import experiencia from '/assets/experiencia.jpg'
import salon from '/assets/salon.jpg'

/*Imagens productos*/
import loreal from '/assets/marcas/loreal.jpg'
import skeyndor from '/assets/marcas/skeyndor.jpg'
import redken from '/assets/marcas/redken.jpg'
import kerastase from '/assets/marcas/kerastase.jpg'


/*Imagens servicios*/
import brushing from '/assets/servicios/4c.jpg'
import extensiones from '/assets/servicios/1c.jpg'
import color from '/assets/servicios/2c.jpg'
import alisado from '/assets/servicios/7c.jpg'
import manicura from '/assets/servicios/3c.jpg'
import facial from '/assets/servicios/6c.jpg'
import cejas from '/assets/servicios/5c.jpg'
import mechas from '/assets/servicios/8c.jpg'

/*Styles*/ 
import './carruselimagenes.css'

type toShow = "nosotros" | "productos" | "servicios";

const CarruselImagenComponent = ({ carruselToShow }: { carruselToShow: toShow }) => {

    const carrusel = {
        nosotros: [
            { url: peluqueria, title: "Peluquería" },
            { url: estetica, title: "Estética" },
            { url: experiencia, title: "Experiencia" },
            { url: salon, title: "Salón" },
        ],
        productos: [
            { url: loreal, title: "" },
            { url: skeyndor, title: "" },
            { url: redken, title: "" },
            { url: kerastase, title: "" },
        ],
        servicios: [
            { url: color, title: "color" },
            { url: brushing, title: "brushing" },
            { url: mechas, title: "mechas" },
            { url: alisado, title: "alisados" },
            { url: extensiones, title: "extensiones" },
            { url: facial, title: "tratamientos faciales" },
            { url: manicura, title: "manicura y pedicura" },
            { url: cejas, title: "pestanas y cejas" },
        ]
    }

    return (
        <div className="image-container">
            {
                carrusel[carruselToShow].map((item) => (
                    <div className="image-with-text">
                        <img src={item.url} alt="Imagen de la Peluquería" />
                        <div className="overlay-text">{item.title}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default CarruselImagenComponent