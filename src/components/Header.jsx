import './Header.css'

function Header()
{
    return (
        <div className="header">
            <a href="#"><h1 className="header__title">ReactAcademy</h1></a>
            <nav className="header__nav">
            <a href="#Inicio">Inicio</a>
            <a href="#Cursos">Cursos</a>
            <a href="#Nosotros">Nosotros</a>
            </nav>
        </div>
    )
}

export default Header;
