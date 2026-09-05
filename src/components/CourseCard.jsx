import './CourseCard.css'

function CourseCard({curso})
{
    return (
        <div className='card'>
            <img className='card__icon' src={curso.logo} alt={curso.alt} />
            <h3>{curso.title}</h3>
            <p className='card__paragraph'>{curso.description}</p>
            <strong className={`card__difficulty card__difficulty--${curso.difficulty.toLowerCase()}`}>{curso.difficulty}</strong>
        </div>
    )
}

export default CourseCard;
