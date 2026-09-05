import BotonCursos from "./BotonCursos";
import './Banner.css'

function Banner()
{
    return (
        <div className="banner">
            <h1 className="banner__title">
                Aprende <span className="banner--highlight-text">React</span> desde cero
            </h1>
            <p  className="banner__paragraph">Domina la libreria mas popular del frontend con proyectos practicos y reales.</p>
            <BotonCursos />
        </div>
    )
}

export default Banner;
