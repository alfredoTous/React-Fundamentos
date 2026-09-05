import './Header.css'

function Header()
{
    return (
        <div id='Inicio' className="header">
            <a href="#"><h2 className="header__title">ReactAcademy</h2></a>
            <nav className="header__nav">
            <a href="#Inicio">Inicio</a>
            <a href="#Cursos">Cursos</a>
            <a href="#Nosotros">Nosotros</a>
            </nav>
        </div>
    )
}

export default Header;
