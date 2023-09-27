import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useEffect, useState} from 'react';
import Table from "react-table";
import DataTable from "react-data-table-component";
import '../../index.css'
import DocentesCursosDataData from '../Mapeo datos/DocentesCursosData';
import SelectAños from './DocentesAños';
const API = "http://10.120.2.114:3070/profesor/years/courses";  

const data = [
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
]


function TableDC() {
    //event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así) evita que vaya directo a la pagina, como un redireccionamiento y previene que haha eso
    //console.log(datos.username + ' ' + datos.pwd)
    /*
    const [courses, setCourses] = useState([]);

    const fetchUsers = async (url) => {
      try{
        const res = await fetch(url, { // Falta la API
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
          },
            //body: JSON.stringify(year),
          });
        //console.log(JSON.stringify(year))
          const data = await res.json();
        console.log(data);
        
        if(data.length >= 0){
          setCourses(data);
        }
        console.log(data);
      
      }catch(e){
        console.error(e)
      }

    }

    useEffect(() => {
    //  var year = document.getElementById("select_anos").value;
      fetchUsers(API);
    }, [])*/


    /*const [courses, setCourses] = useState(0);

    useEffect(() => {
      traerDatos();
    }, []);
    
    const traerDatos = async () => {
      const data = await fetch(API, { method: "POST" });
      const datos = await data.json();
    
      // Actualizar el estado `courses` una vez que la solicitud HTTP haya finalizado
      setCourses(datos.results);
    };

    
    const renderCourses = () => {
      if(courses && courses.length > 0){
        return courses.map((course) => (
          <li key={course['2015'][0].id}>{course['2015'][0].Materia}</li>
        ));
      }else{
        return <p>No hay cursos disponibles.</p>;
      }

    };
    console.log(courses)

    return <>
    <details>
      {console.log(courses)}
      <summary>2023</summary>
      Matematicas, lengua, etc
      {renderCourses()}
    </details>
    
    </>

  }*/
  return(
    <div className="TableDC">
      <h1>TEST</h1>
      <DataTable
      columns={columns}
      data={data}
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