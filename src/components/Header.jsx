import './Header.css'
import { Link } from "react-router"

function Header()
{
    return (
        <div id='Inicio' className="header">
            <Link to="/"><h2 className='header__title'>ReactAcademy</h2></Link>
            <nav className="header__nav">
            <Link to="/">Inicio</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/nosotros">Nosotros</Link>
            </nav>
        </div>
    )
}

export default Header;
