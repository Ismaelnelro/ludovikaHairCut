import React from 'react'
import { service } from '../../components/hero/HeroSectionComponents';


import './pagelayout.css'

const PageLayout = ({ service, children }: { service: service; children: React.ReactNode }) => {

    const layoutServiceInfo = {
        "peluqueria": {
            title: "PELUQUERÍA MUJER HAIR CUT",
            subtitle: "Descubre nuestra peluquería de mujer  y porque nuestros clientes nos sitúan entre los mejores salones de Barcelona. Profesionalidad, calidad, experiencia y pasión por nuestra profesión. En Hair Cut Day, peluquería mujer Barcelona, estamos comprometidos con tus sueños, explícanos la imagen que quieres reflejar y nosotros haremos la magia para que tus deseos se hagan realidad.",
        },
        "salon": {
            title: "SALÓN DE BELLEZA",
            subtitle: "En Hair Cut , tu salón de belleza , ofrecemos todo tipo de servicios estéticos, descubre entre nuestra amplia gama de limpieza facial. ¿Quieres impactar con tu mirada? Reserva tu cita para realizarte un diseño de cejas, tinte y permanente de pestañas, todo lo que necesites para lucir radiante.",
        },
        "estetica": {
            title: "PELUQUERÍA MUJER HAIR CUT",
            subtitle: "En Hair Cut , tu salón de belleza , ofrecemos todo tipo de servicios estéticos, descubre entre nuestra amplia gama de limpieza facial. ¿Quieres impactar con tu mirada? Reserva tu cita para realizarte un diseño de cejas, tinte y permanente de pestañas, todo lo que necesites para lucir radiante.",
        },
        "experiencia": {
            title: "DISFRUTA DE UNA EXPERIENCIA DE BELLEZA TOTALMENTE PERSONALIZADA",
            subtitle: "¿Te apetece vivir una experiencia única y exclusiva en Barcelona? En Hair Cut Day te proponemos una variedad de experiencias que van desde una transformación de look total, asesoramiento de imagen y nutrición hasta los tratamientos más prestigiosos y lujosos para el cuidado de tu pelo y tu piel.",
        }
    }

    const { title, subtitle } = layoutServiceInfo[service] || { title: "", subtitle: "" };

    return (
        <section className='section-details'>
            <h1 className='title-details'>{title}</h1>
            <p className='subtitle-details'>
                {subtitle}
            </p>
            {children}
        </section>
    )
}

export default PageLayout