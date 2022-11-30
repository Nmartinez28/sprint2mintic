import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">EnvíaYa!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Entrar">Entrar</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registro">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Noticias">Noticias</Link>
                        </li>                         
                        <li className="nav-item">
                            <Link className="nav-link" to="/Listado_ordenes">Listado órdenes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registro_ordenes">Registro órdenes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/A_ordenes">Actualización de órdenes</Link>
                        </li>                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}