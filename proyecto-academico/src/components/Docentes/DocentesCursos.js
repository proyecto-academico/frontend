import {useEffect, useState} from 'react';
import '../../index.css'
import DocentesCursosDataData from '../Mapeo datos/DocentesCursosData';
const API = "http://10.120.2.114:3070/profesor/courses";  

const TableDC = () => {
    //event.preventDefault(); // Cancela el direccionamiento a la API (una cosa así) evita que vaya directo a la pagina, como un redireccionamiento y previene que haha eso
    //console.log(datos.username + ' ' + datos.pwd)
    
    const [courses, setCourses] = useState([]);

    const fetchUsers = async (url) => {
      try{
        const res = await fetch(url, { // Falta la API
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "datatype":"JSON"// 'Content-Type': 'application/x-www-form-urlencoded',
          },
            //body: JSON.stringify(datos),
          });
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
      fetchUsers(API);
    }, [])
    return <>
      <table>
        <thead>
          <th>Materia</th>
          <th>Año Escolar</th>
          <th>Division Escolar</th>
          <th>Accion</th>
        </thead>
        <tbody>
          <DocentesCursosDataData courses={courses}/>
        </tbody>
      </table>
    </>

  }

export default TableDC