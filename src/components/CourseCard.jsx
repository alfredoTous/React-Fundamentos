import coheteIcon from '../assets/cohete-icon-svg.webp'
import './CourseCard.css'

function CourseCard()
{
    return (
        <div className='card'>
            <img className='card__icon' src={coheteIcon} alt="Icono Cohete" />
            <h3>React Basico</h3>
            <p>Componentes, props, estado y eventos. Todo lo que necesitas para empezar</p>
            <strong>Principiante</strong>
        </div>
    )
}

export default CourseCard;
