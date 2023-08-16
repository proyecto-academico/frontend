import {useEffect, useState} from 'react';
import '../Mapeo datos/DocentesAñosData';
import '../../index.css';


const tablaAños = () => {


    return <>

        <table>
         <thead>
           <th>Ciclo Lectivo</th>
           <th>Accion</th>
         </thead>
         <tbody>
           <DocentesAñosData ciclos={ciclos}/>
         </tbody>
        </table>

    </>
}

export default tablaAños;