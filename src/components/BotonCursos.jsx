import './BotonCursos.css'
import { Link } from 'react-router';

function BotonCursos()
{ 
    return (
        <Link to="/cursos" className="botonCursos">Ver Cursos</Link>
    )
}

export default BotonCursos;
