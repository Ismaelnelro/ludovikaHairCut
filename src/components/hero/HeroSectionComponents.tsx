
import './herosectioncomponent.css'

export type service = 'peluqueria' | 'salon' | 'estetica' | 'experiencia';

const HeroSectionComponents = ({ service, title }: { service: service; title: string }) => {
    return (
        <section className="hero-section">
            <img className="hero-image" src={`src/assets/${service}.jpg`} alt={title} />
            <p className='hero-title'>{title}</p>
        </section >
    )
}
export default HeroSectionComponents