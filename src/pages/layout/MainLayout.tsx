import { Outlet } from 'react-router';

/*Componentes*/ 
import FooterComponent from '../../components/footer/FooterComponent';
import HeaderComponent from '../../components/header/HeaderComponent';
import CarruselImagenComponent from '../../components/carrusel/CarruselImagenComponent';

/*Styles*/ 
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
