import { Fragment, useState, useEffect } from 'react';

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
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre Curso</th>
              <th>Año</th>
              <th>Ciclo Lectivo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, nombreCurso, anioCurso, CicloLectivo }) => (
              <tr key={id}>
                <td>{nombreCurso}</td>
                <td>{anioCurso}</td>
                <td>{CicloLectivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando datos...</p>
      )}
    </Fragment>
  );
}

export default Table;