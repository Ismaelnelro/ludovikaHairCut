
import { Link, useLocation } from 'react-router-dom'

/*Images*/
import logo from '../../assets/logo.png'

/*Estilos*/
import './headercomponent.css'
import ReservasModal from '../ui/reservas/ReservasModal'
import { useEffect, useState } from 'react'

const HeaderComponent = () => {

    const [isReservasModalActive, setisReservasModalActive] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <header className="navbar">
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo} alt="Hair Cut" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/peluqueria">PELUQUERÍA
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/estetica">ESTÉTICA
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/experiencia">EXPERIENCIAS
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/salon">SALÓN
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="actions">
                <Link to="/contacto" className="contacto">CONTACTO</Link>
                <Link to="#" onClick={() => setisReservasModalActive(true)} className="btn-reservar">RESERVAR</Link>
            </div>
            <ReservasModal isReservasModalActive={isReservasModalActive} setisReservasModalActive={setisReservasModalActive} />
        </header >

    )
}

export default HeaderComponent