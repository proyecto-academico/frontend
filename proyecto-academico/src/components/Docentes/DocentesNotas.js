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

const TableDN = () => {
  const [course, setCourse] = useState( [] )

  //Mostrar los datos con el fetch
    const URL = 
    [
      {
        id: 1,
        first_bimestre: 6,
        second_bimestre: 1,
        third_bimestre: 9,
        fourth_bimestre: 7,
        grade_definitive: 8
      },
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
      name: 'Primer bimestre',
      selector: row => row.first_bimestre
    },
    {
      name: 'Segundo bimestre',
      selector: row => row.second_bimestre
    },
    {
      name: 'Tercer bimestre',
      selector: row => row.third_bimestre
    },
    {
      name: 'Cuarto bimestre',
      selector: row => row.fourth_bimestre
    },
    {
        name: 'Nota Final',
        selector: row => row.grade_definitive
    },
    {
      name: 'Accion',
      selector: () => <Button label="Entrar" onClick={() => console.log("Hola")}>Editar / Eliminar</Button>
    }
  ]
  
    return(
      <div>
        <h1>Notas</h1>
        <DataTable
        columns={columns}
        data={URL}
        /> 
        
      </div>
    )
  
  
  };


export default TableDN;
