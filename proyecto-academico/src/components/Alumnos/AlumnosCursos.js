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

const TableAC = () => {
  const [course, setCourse] = useState( [] )

  //Mostrar los datos con el fetch
  const URL = "http://10.120.2.114:3070/student/courses";  
  const showData = async () => {
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
  }, [])
    const columns = [
      {
        name: 'Año',
        selector: row =>row.Division.Ano_Escolar
      },
      {
        name: 'Division',
        selector: row =>row.Division.Division_Escolar
      },
      {
        name: 'Fecha Comienzo',
        selector: row => row.Fecha_Comienzo
      },
      {
        name: 'Fecha Final',
        selector: row => row.Fecha_Final
      },
      {
        name: 'Materia',
        selector: row => row.Materia.Nombre
      },
      {
        name: 'Accion',
        selector: () => <Button label="Ver" onClick={() => console.log("Hola")} />
      }
    ]
  
    return(
      <div>
        <h1>Cursos</h1>
        <DataTable
        columns={columns}
        
        data={course}
        /> 
        <button> <Link to="/AlumnosNotas">Ver Notas</Link></button> 
        
      </div>
    )
  
  
  };

/*

    fetch("http://10.120.2.114:3070/profesor/courses", { // Falta la API
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(datos),
    }).then(data => console.log(data)).then(data => (data.json())).then(data => console.log(data))

  return (
      <div className='tabla'>
        <table class="table table-striped table-dark">
          </table>
          </div>
  );
          };

 */

export default TableAC;
