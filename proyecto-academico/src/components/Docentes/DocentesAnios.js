import {Fragment, useState, useEffect } from 'react';
import '../../index.css'

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
                    <th scope="col">Ciclo lectivo</th>
                    <th scope="col">Entrar</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.anio}</td>
                  </tr>
                ))}
            </tbody>
        </table>
        </div>
    </Fragment>
  );
}

export default Table;