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
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Nota</th>
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
    </Fragment>
  );
}

export default Table;