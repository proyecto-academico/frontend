import {Fragment, useState, useEffect } from 'react';
import '../../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los datos
    fetch("../data.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <Fragment>
      <div className='tabla'>
        <table class="table table-striped table-dark">
          <thead>
          <tr>            
            <th scope="col">Año</th>
            <th scope="col">División</th>
            <th scope="col">Materia</th>
            <th scope="col">Ciclo Lectivo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.anioCurso}</td>
              <td>{item.divisionCurso}</td>
              <td>{item.materia}</td>
              <td>{item.CicloLectivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
}

export default Table;