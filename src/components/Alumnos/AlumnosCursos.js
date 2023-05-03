import {Fragment, useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los datos
    fetch('https://ejemplo-api.com/datos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Fragment>
      <table>
        <thead>
          <tr>            
            <th>Año</th>
            <th>División</th>
            <th>Materia</th>
            <th>Ciclo Lectivo</th>
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
    </Fragment>
  );
}

export default Table;