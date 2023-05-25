import React, {Fragment, useState} from 'react';
import data from "../data.json";


const FormLogin = () => {
    const [datos, setDatos] = useState({
        username: '',
        pwd:''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así)
        console.log(datos.username + ' ' + datos.pwd)
        fetch("../data.json", { // Falta la API
          method: 'POST',
            body: datos,
        }).then(data => data.text()).then(data => console.log(data))
            if(datos.username == data.profesores[0].DNI_Profesor && datos.pwd == data.profesores[0].Contraseña){
                window.location.href="Docentes/DocentesCursos.js";
                alert("Bienvenido " + data.profesores[0].Nombre);
            }
            if(datos.username == data.alumnos[0].DNI_alumno && datos.pwd == data.alumnos[0].Contraseña){
                window.location.href="Alumnos/AlumnosCursos.js";
                alert("Bienvenido " + data.alumnos[0].Nombre);
            }
    }
        //fetch("10.120.2.114:3050").then(data => data.text()).then(data => console.log(data))    }

    
    return(
        <Fragment>
            <div class="container">
                <div class="espaciado-def row justify-content-center">
                    <div class="espaciado-login p-4 rounded">
                        <div class="">
                            <h2 class="text-center">Iniciar sesión</h2>
                            <div class="form rounded shadow p-3">
                                <form method="POST" action="" onSubmit={enviarDatos}>
                                    <div class="form-group">
                                        <div>
                                            <label for="username"><b>Usuario</b></label>
                                            <input 
                                            type="text" 
                                            class="form-control mt-1" 
                                            placeholder="Ingrese su nombre de usuario" 
                                            id="username"
                                            name="username"
                                            onChange={handleInputChange} 
                                            required/>
                                        </div>
                                        <div>
                                            <label for="pwd" class="mt-1"><b>Contraseña</b></label>
                                            <input 
                                            type="password" 
                                            class="form-control" 
                                            placeholder="Ingrese su contraseña"
                                            id="pwd" 
                                            name="pwd"
                                            onChange={handleInputChange} 
                                            required/>
                                        </div>
                                        <button type="submit" value="submit" class="btn btn-success mt-3 w-100">Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default FormLogin;