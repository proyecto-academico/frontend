import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useEffect, useState} from 'react';
import Table from "react-table";
import DataTable from "react-data-table-component";
import '../../index.css'
import {isImmutable, toJS} from 'immutable';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/*Vista de los alumnos de sus cursos (Los profesores también pueden*/ 

const TableDM = () => {
  const [course, setCourse] = useState( [] )

  //Mostrar los datos con el fetch
    const URL = 
    [
      {
        id: 1,
        name: "Lucas",
        surname: "Abdhala",
        grade_definitive: 8
      },
      {
        id: 1,
        name: "Zaun",
        surname: "Chunchun",
        grade_definitive: 5
      },
      {
        id: 1,
        name: "Pedro",
        surname: "Ongo",
        grade_definitive: 4
      }
    ]
 //"http://10.120.2.114:3070/student/courses";  
  /*const showData = async () => {
    const response = await fetch(URL,
      {
        method: "post"
      })
    const data = await response.json()
    console.log(data)
    setCourse(data);
  }

  useEffect( ()=> {
    showData()
  }, [])*/
  const columns = [
    {
      name: 'Id',
      selector: row => row.id
    },
    {
      name: 'Nombre',
      selector: row => row.name
    },
    {
      name: 'Apellido',
      selector: row => row.surname
    },
    {
      name: 'Nota final',
      selector: row => row.grade_definitive
    },
    {
      name: 'Accion',
      selector: () => <Button label="Entrar" onClick={() => console.log("Hola")}>Ver notas</Button>
    }
  ]
  
    return(
      <div>
        <h1>Matematica</h1>
        <DataTable
        columns={columns}
        data={URL}
        /> 
        
      </div>
    )
  
  
  };


export default TableDM;
