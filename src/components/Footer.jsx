import './Footer.css'
import { Link } from 'react-router'

function Footer()
{
    return (
        <div className="footer">
            <p>
                © 2026 <Link to="/">ReactAcademy</Link>. Taller02 -- React Fundamentos.
            </p>
        </div>
    )
}


export default Footer;
