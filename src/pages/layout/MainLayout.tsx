import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import { Outlet } from 'react-router';
import CarruselImagenComponent from '../../components/carrusel/CarruselImagenComponent';


import './mainlayout.css';

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <Outlet />

            <section className='productos-section'>
                <h1>TRABAJAMOS CON LOS MEJORES PRODUCTOS DE PELUQUERÍA</h1>
                <CarruselImagenComponent carruselToShow='productos' />
            </section>
            <FooterComponent />
        </div>
    );
}

export default MainLayout;
