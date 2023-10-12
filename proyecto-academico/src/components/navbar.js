import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css"
import { Fragment } from "react";

function App() {
    return (
        <div className="App">
        <Fragment>
        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="div-img">
                    <img className="imagen-res" width="120px" src="logo.png"/>
                <spam>E.T.N°26 DE6 "Confederación Suiza"</spam>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item pl-1">
                            <a className="nav-link" href="#"><i className="fa fa-home fa-fw mr-1"></i>Inicio</a>
                        </li>
                        <li className="nav-item pl-1">
                            <a className="nav-link" href="#"><i className="fa fa-info-circle fa-fw mr-1"></i>Cursos</a>
                        </li>
                        <li className="nav-item pl-1">
                            <a className="nav-link" href="#"><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Aulas</a>
                        </li>
                        <li className="nav-item pl-1">
                            <a className="nav-link" href="#"><i className="fa fa-user-plus fa-fw mr-1"></i>Años</a>
                        </li>
                        <li className="nav-item pl-1">
                            <a className="nav-link" href="#"><i className="fa fa-sign-in fa-fw mr-1"></i>Profesores</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
            
            </Fragment>
        </div>
        
    );
}

export default App;

