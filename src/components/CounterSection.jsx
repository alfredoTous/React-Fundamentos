import './CounterSection.css'
import Counter from './Counter';

function CounterSection()
{
    return (
        <div className="counterSection">
            <h2>Cuantos Estudiantes van a inscribirse?</h2>
            <p>Usa los botones para ajustar el numero</p>
            <Counter/>
            <p>estudiantes inscritos</p>
        </div>
    )
}

export default CounterSection;
