import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css"
import { Fragment } from "react";

function App() {
    return (
        <div className="App">
        <Fragment>
        <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#"><img className="logo1" src="logo.png" alt=""/>E.T.N°26 DE6 "Confederación Suiza"</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item pl-1">
                            <a class="nav-link" href="#"><i class="fa fa-home fa-fw mr-1"></i>Inicio</a>
                        </li>
                        <li class="nav-item pl-1">
                            <a class="nav-link" href="#"><i class="fa fa-info-circle fa-fw mr-1"></i>Cursos</a>
                        </li>
                        <li class="nav-item pl-1">
                            <a class="nav-link" href="#"><i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Aulas</a>
                        </li>
                        <li class="nav-item pl-1">
                            <a class="nav-link" href="#"><i class="fa fa-user-plus fa-fw mr-1"></i>Años</a>
                        </li>
                        <li class="nav-item pl-1">
                            <a class="nav-link" href="#"><i class="fa fa-sign-in fa-fw mr-1"></i>Profesores</a>
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

