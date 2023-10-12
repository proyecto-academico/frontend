import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useEffect, useState} from 'react';
import Table from "react-table";
import DataTable from "react-data-table-component";
import '../../index.css';
/* Ejemplo estático
  {
    id: 1,
    name: "Lucas",
    age: 22
  },
  {
    id: 2,
    name: "Pedro",
    age: 15
  },
  {
    id: 3,
    name: "Raul",
    age: 86
  }
]

const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'NAME',
    selector: row => row.name
  },
  {
    name: 'AGE',
    selector: row => row.age
  }
]*/



const TableDC = () => {
//Configuración de los hooks
const [course, setCourse] = useState( [] )

//Mostrar los datos con el fetch
const URL = 'http://10.120.2.114:3070/profesor/years/courses'
const showData = async () => {
  const response = await fetch(URL,
    {
      method: "post"
    })
  const data = await response.json()
  console.log(data)
  setCourse(data)
}

useEffect( ()=> {
  showData()
}, [])
  const columns = [
    {
      name: 'Materia',
      
      selector: row =>row.Materia
    },
    {
      name: 'Año Escolar',
      selector: row => row.Ano_Escolar
    },
    {
      name: 'Division',
      selector: row => row.Division
    },
    {
      name: 'Ciclo lectivo',
      selector: row => row.ano_actual
    }
  ]

  return(
    <div>
      <DataTable
      columns={columns}
      
      data={course}
      />  
      
    </div>
  )


};

export default TableDC;

/* Tabla
      <table className='table table-striped'>
        <thead className='thead'>
          <tr>
          <th scope='col'>Materia</th>
          <th scope='col'>Año Escolar</th>
          <th scope='col'>Division Escolar</th>
          <th scope='col'>Accion</th>
          </tr>
        </thead>
        <tbody>
        <DocentesCursosDataData courses={courses}/>
        </tbody>
      </table>
*/