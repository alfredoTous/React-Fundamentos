import { useState } from 'react';
import './Login.css'

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enviado, setEnviado] = useState(false);

    const HandleClick = (e) => {
        e.preventDefault();
        setEnviado(true);
        setTimeout(() => {
            setEnviado(false);
        }, 3000);
    }

    const disableButton = () => {
        if (email.length <= 3 || password.length <= 3 || enviado == true) return true;
        return false;
    }

    return (
        <div className='login__div'>
            <form className='login__card' onSubmit={HandleClick}>
                <h2 className='login__title'>Iniciar <span>Sesion</span></h2>
                <label className='login__label'>
                    Email
                    <input className='login__input' type="email" placeholder='ana@uninorte.edu.co'
                        disabled={enviado}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                
                <label className='login__label'>
                    Contraseña
                    <input className='login__input' type="password"
                        disabled={enviado}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className='button__div'>
                    <button className='login__button' disabled={disableButton()}>Enviar</button>
                </div>
                <p className='login__microcopy'>
                    Este formulario no valida usuarios ni contraseñas
                </p>
            </form>
            {enviado && (
                <div className="login__notification">
                    ✓ Enviado correctamente
                </div>
            )}
        </div>
    )
}

export default Login;
