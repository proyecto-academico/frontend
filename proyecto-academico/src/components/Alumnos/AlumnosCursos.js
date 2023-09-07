import {useEffect, useState} from 'react';
import '../../index.css'
import AlumnosData from '../Mapeo datos/AlumnosData';
const API = "http://10.120.2.114:3070/student/courses";  


const Table = () => {
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
      <table className='tablacursosalumnos table table-striped'>
        <thead className='thead'>
          <tr>
          <th>Materia</th>
          <th>Año Escolar</th>
          <th>Division Escolar</th>
          <th>Año</th>
          <th>Accion</th>
          </tr>
          </thead>
        <tbody>
          <AlumnosData courses={courses}/>
        </tbody>
      </table>
    </>

  }

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

export default Table
