import React, { useState, useEffect } from "react";


const DocentesCursosData = () =>{
   
    useEffect(() => {
        traerDatos();
    },[])


    const traerDatos = async () => {
        const url = "http://10.120.2.114:3070/profesor/years/courses";
        const response = await fetch(url, {method: "POST",});
        const data = await response.json();
        console.log(data)
    };

  return(
    <>

    </>
  )
}
export default DocentesCursosData;