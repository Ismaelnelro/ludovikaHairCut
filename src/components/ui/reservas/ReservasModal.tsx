
/*Styles*/
import './reservasmodal.css'

const ReservasModal = ({ isReservasModalActive, setisReservasModalActive }: { isReservasModalActive: boolean; setisReservasModalActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={`container-reservas   ${isReservasModalActive ? "container-reservas-active " : ""}`}>
            <section className='reservas-exit' onClick={() => setisReservasModalActive(false)}>
                X
            </section>
            <section className='reservas-address'>
                <p>
                    <span className="material-symbols-outlined">
                        location_on
                    </span>
                    Lorem ipsum, dolor sit amet conse!
                </p>
                <p>
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=36631181678">
                        631181678
                    </a>
                </p>
                <p>
                    <span className="material-symbols-outlined">
                        mail
                    </span>info@ludovicka.com</p>
                <p>
                    <span className="material-symbols-outlined">
                        public
                    </span>http://www.ludovickahair.com/</p>
            </section>
            <section className='reservas-horarios'>
                <table>
                    <thead>
                        <tr>
                            <td>Dias</td>
                            <td>Horarios</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Domingo</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                        <tr>
                            <td>Martes</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                        <tr>
                            <td>Miercoles</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                        <tr>
                            <td>Jueves</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                        <tr>
                            <td>Viernes</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                        <tr>
                            <td>Sabado</td>
                            <td>9hs -12hs | 17hs- 22hs</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ReservasModal