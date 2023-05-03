import {Fragment, useState, useEffect } from 'react';
import '../../index.css'

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