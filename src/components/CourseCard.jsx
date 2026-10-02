import './CourseCard.css'
import { Link } from 'react-router'

function CourseCard({curso})
{
    return (
        <Link className='card' to="/login">
            <img className='card__icon' src={curso.logo} alt={curso.alt} />
            <h3>{curso.title}</h3>
            <p className='card__paragraph'>{curso.description}</p>
            <strong className={`card__difficulty card__difficulty--${curso.difficulty.toLowerCase()}`}>{curso.difficulty}</strong>
        </Link>
    )
}

export default CourseCard;
