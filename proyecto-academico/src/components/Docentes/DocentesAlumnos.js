import {Fragment, useState, useEffect } from 'react';
import '../../index.css'

function Table() {
  /*const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los datos
    fetch("../data.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);*/

  const enviarDatosProfesores = (event) => {
    //event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así) evita que vaya directo a la pagina, como un redireccionamiento y previene que haha eso
    //console.log(datos.username + ' ' + datos.pwd)
    fetch("http://10.120.2.114:3070/alumno/courses", { // Falta la API
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(datos),
    }).then(data => (data.json())).then(data => console.log(data))
  }

  enviarDatosAlumnos();

  return (
    <Fragment>
      <div className='tabla'>
        <table class="table table-striped table-dark">
          <thead>
          <tr>            
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Nota</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.apellido}</td>
                    <td>{item.nota}</td>
                  </tr>
                ))}
            </tbody>
        </table>
        </div>
    </Fragment>
  );
}

export default Table;