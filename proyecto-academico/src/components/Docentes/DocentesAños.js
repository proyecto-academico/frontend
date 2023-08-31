import {useEffect, useState} from 'react';
import DocentesAñosData from '../Mapeo datos/DocentesAñosData';
import '../../index.css';
import TableDC from './DocentesCursos';
const API = "http://10.120.2.114:3070/profesor/years";  


const TablaAños = () => {
    const [years, setYears] = useState([]);

    const fetchYears = async (url) => {
      try{
        const rest = await fetch(url, {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "datatype":"JSON"
          },
        });
        const dataYear = await rest.json();
        console.log(dataYear);
        if(dataYear.length >= 0){
          setYears(dataYear);
          TableDC(dataYear[0]);
        }
        console.log(dataYear);
      }
      catch(e){
        console.error(e)
      }
    }
    
    useEffect(() => {
      fetchYears(API);

    }, [])
    return <>
        <select id="select_anos">
          <DocentesAñosData years={years}/>
        </select>
    </>
}

export default TablaAños
