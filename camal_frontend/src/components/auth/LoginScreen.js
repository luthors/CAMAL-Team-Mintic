import React from 'react'
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Iniciar sesión</h3>

            <form>

                <input
                    type="text"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                    >
                    Acceder
                </button>
                
                <div className="auth__social-networks">
                    <p>Ingresar con redes sociales:</p>

                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar con Google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register">
                    Crear nueva cuenta                
                </Link>

            </form>
        </>
    )
}
