import React, {Fragment, useState} from 'react';
import data from "../data.json";
import {useParams} from 'react-router-dom';
import '../formLogin.css';

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
          <div className="pantalla-inicio">
        <div className='izquierda'>
        </div>
        <div className='derecha'>
          <div className="formulario">
            <form method="POST" action="" onSubmit={enviarDatos}>
              <h1 className="text-center">Iniciar sesión</h1>
              <div className="form-group">
                <label htmlFor="username"><b>Usuario*</b></label>
                <input
                  type="text" 
                  className="form-control"
                  placeholder="Usuario"
                  id="username"
                  name="username"
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label htmlFor="pwd"><b>Contraseña*</b></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="pwd"
                  name="pwd"
                  onChange={handleInputChange}
                  required
                />
                <br/>
                <div className="boton-container">
                  <button type="submit" value="submit" className="boton">Ingresar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </Fragment>
    );
}


export default FormLogin;