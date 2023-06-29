import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './logo.svg';
import FormLogin from './components/FormLogin';
import './App.css';
import DocentesCursos from "./components/Docentes/DocentesCursos";
//import DocentesAlumnos from "./componentes/Docentes/DocentesAlumnos";
import AlumnosCursos from "./components/Alumnos/AlumnosCursos";
import AlumnosCursosGraficos from "./components/Alumnos/AlumnosGraficos/AlumnosNotasCursosGraficos";
import Navbar from "./components/navbar";
import React from 'react';
import { Route, Routes, useParams} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<FormLogin/>} />
                <Route path='/DocenteCursos' element={<DocentesCursos/>} />
                <Route path='/AlumnosCursos' element={<AlumnosCursos/>} />
                <Route path='/AlumnosCursosGraficos' element={<AlumnosCursosGraficos/>}/>
                <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
