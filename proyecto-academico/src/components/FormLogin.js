import React, {Fragment, useState} from 'react';
import data from "../data.json";
import {useParams} from 'react-router-dom';

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
        event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así) evita que vaya directo a la pagina, como un redireccionamiento y previene que haha eso
        console.log(datos.username + ' ' + datos.pwd)
        fetch("http://10.120.2.114:3070/test", { // Falta la API
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify(datos),
        }).then(data => (data.json())).then(data => data["type"] == "Profesor" ? window.location.href="/DocenteCursos": data["type"] == "Alumno" ? window.location.href="/AlumnosCursos" : alert("Error")) //)//)
       /* for(var i=0;i<data.profesores.length;i++){
            if(datos.username == data.profesores[i].DNI_Profesor && datos.pwd == data.profesores[i].Contraseña){
                
                window.location.href="/DocenteCursos";
                alert("Bienvenido " + data.profesores[i].Nombre);
            }
            if(datos.username == data.alumnos[i].DNI_alumno && datos.pwd == data.alumnos[i].Contraseña){
                window.location.href="/AlumnosCursos";
                alert("Bienvenido " + data.alumnos[i].Nombre);
            }    
        } */   
    }
        //fetch("10.120.2.114:3050").then(data => data.text()).then(data => console.log(data))    }

        
    
    return(
        <Fragment>
            <div className="container">
                <div className="espaciado-def row justify-content-center">
                    <div className="espaciado-login p-4 rounded">
                        <div className="">
                            <h2 className="text-center">Iniciar sesión</h2>
                            <div className="form rounded shadow p-3">
                                <form method="POST" action="" onSubmit={enviarDatos}>
                                    <div className="form-group">
                                        <div>
                                            <label for="username"><b>Usuario</b></label>
                                            <input 
                                            type="text" 
                                            className="form-control mt-1" 
                                            placeholder="Ingrese su nombre de usuario" 
                                            id="username"
                                            name="username"
                                            onChange={handleInputChange} 
                                            required/>
                                        </div>
                                        <div>
                                            <label for="pwd" className="mt-1"><b>Contraseña</b></label>
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Ingrese su contraseña"
                                            id="pwd" 
                                            name="pwd"
                                            onChange={handleInputChange} 
                                            required/>
                                        </div>
                                        <button type="submit" value="submit" className="btn btn-success mt-3 w-100">Ingresar</button>
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