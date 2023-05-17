import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './logo.svg';
import FormLogin from './components/FormLogin';
import './App.css';
import DocentesAlumnos from "./components/Docentes/DocentesAlumnos";
import DocentesCursos from "./components/Docentes/DocentesCursos";
import AlumnosCursos from "./components/Alumnos/AlumnosCursos";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <FormLogin/>
            <DocentesAlumnos/>
            <DocentesCursos/>
            <AlumnosCursos/>
        </div>
    );
}

export default App;
