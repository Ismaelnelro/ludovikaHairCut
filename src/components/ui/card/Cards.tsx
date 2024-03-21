
/*Styles*/
import './card.css'

interface Tarjeta {
    titulo: string;
    contenido: string;
    logo: string;
}

const Cards = ({ tarjetas }: { tarjetas: Tarjeta[] }) => {
    return (
        <>
            {
                tarjetas.map(({ titulo, contenido, logo }) => (
                    <div className="card">
                        <img className="card-icon" src={logo} alt={titulo} />

                        <div className='card-info'>
                            <p className="info-title">{titulo}</p>
                            <p className="info-description">{contenido}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Cards