import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useEffect, useState} from 'react';
import '../../index.css'
import DocentesCursosDataData from '../Mapeo datos/DocentesCursosData';
import SelectAños from './DocentesAños';
const API = "http://10.120.2.114:3070/profesor/years/courses";  

const TableDC = ({year}) => {
    //event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así) evita que vaya directo a la pagina, como un redireccionamiento y previene que haha eso
    //console.log(datos.username + ' ' + datos.pwd)
    
    const [courses, setCourses] = useState([]);

    const fetchUsers = async (url,year) => {
      try{
        const res = await fetch(url, { // Falta la API
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify(year),
          });
        console.log(JSON.stringify(year))
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
      fetchUsers(API,year);
    }, [])
    return <>
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

    </>

  }

export default TableDC