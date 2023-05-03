import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './logo.svg';
import FormLogin from './components/FormLogin';
import './App.css';
import DocentesAlumnos from "./components/Docentes/DocentesAlumnos";
import DocentesCursos from "./components/Docentes/DocentesCursos";
import AlumnosCursos from "./components/Alumnos/AlumnosCursos";

function App() {
    return (
        <div className="App">
        
            <div class="espaciado">
                <nav class="navbar border-bottom navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="#"><img src="logo.png" alt=""/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <hr/>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-center" href="#">Inicio</a>
                            </li>
                        </ul>
                    </div>
                  </div>
                </nav>
            </div>
            <FormLogin/>
        </div>
    );
}

export default App;
