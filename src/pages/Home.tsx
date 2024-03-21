/*Components*/
import CarruselImagenComponent from '../components/carrusel/CarruselImagenComponent'
import Cards from '../components/ui/card/Cards'

/*Imagenes*/ 
import explorar from '/assets/icons/1.png'
import encontrar from '/assets/icons/2.png'
import sumergir from '/assets/icons/3.png'

/*Styles*/ 
import './styles/home.css'


const tarjetas = [
    {
        titulo: "Explora la Belleza",
        contenido: "¡Bienvenido a una experiencia única en LUDOVICKA ! Sumérgete en un oasis de creatividad y estilo, donde la belleza se encuentra en cada rincón. Nuestros talentosos estilistas son maestros en el arte de realzar tu belleza natural. Con un enfoque centrado en la individualidad y la innovación, te garantizamos que te sentirás rejuvenecido y radiante después de tu visita. ¡Descubre el poder transformador de LUDOVICKA  hoy mismo!",
        logo: explorar
    },
    {
        titulo: "Encuentra tu Estilo",
        contenido: "En LUDOVICKA , tu estilo es nuestra pasión. Con una atención excepcional a los detalles y un ojo experto para las últimas tendencias, nuestro equipo de estilistas está aquí para ayudarte a encontrar tu look perfecto. Ya sea que busques un cambio radical o simplemente quieras refrescar tu apariencia actual, puedes confiar en nosotros para brindarte un servicio excepcional y resultados espectaculares. ¡Déjanos elevar tu estilo en LUDOVICKA !",
        logo: encontrar
    },
    {
        titulo: "Sumérgete en la Elegancia",
        contenido: "¿Buscas un toque de elegancia y sofisticación? En LUDOVICKA, te invitamos a un mundo de lujo y estilo refinado. Desde cortes de cabello elegantes hasta colores vibrantes y tratamientos rejuvenecedores, ofrecemos una gama completa de servicios para satisfacer tus necesidades de belleza más exigentes. Nuestro compromiso con la excelencia. ¡Descubre la verdadera belleza en LUDOVICKA  hoy mismo!",
        logo: sumergir
    }

];

const Home = () => {
    return (
        <>
            <section className="section hero">
                <div className="hero-content">
                    <h1>¡Transforma tu estilo!</h1>
                    <p>Descubre nuestro nuevo corte de cabello que te hará destacar.</p>
                    <a href="#" className="btn-reserva">Reservar ahora</a>
                </div>
            </section>

            <section className='section services'>
                <h2>¡Descubre la excelencia en el arte de la belleza capilar en nuestos salones!</h2>
                <CarruselImagenComponent carruselToShow='nosotros' />
                <h2>¿BUSCAS UNA PELUQUERÍA MODERNA?</h2>
                <p>
                    Embárcate en un viaje de belleza en LUDOVICKA, donde cada visita es una aventura inolvidable. Encuéntranos en el exuberante paisaje de BsAs o en el Brasil, y permítenos llevarte a un mundo de experiencias únicas. Vive momentos de relajación, descubre nuevos sueños y disfruta de la transformación en cada cita con nosotros
                </p>
            </section>

            <div className='section-cards'>
                <Cards tarjetas={tarjetas} />
            </div>

            <section className='section top-services'>
                <h1>DESCUBRE LOS SERVICIOS MÁS TOP DE NUESTRAS PELUQUERÍAS </h1>
                <CarruselImagenComponent carruselToShow='servicios' />
            </section>
        </>
    )
}

export default Home