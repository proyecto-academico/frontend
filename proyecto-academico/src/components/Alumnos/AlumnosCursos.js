import {Fragment, useState, useEffect } from 'react';
import React, { Component } from 'react';
import '../../index.css'
import datos from '../../data.json'

const Table = () => {
  return (
      <div className='tabla'>
        <table class="table table-striped table-dark">
          <thead>
              <tr>            
                  <th scope="col">Materia</th>
                  <th scope='col'>Ciclo Lectivo</th>
                  <th scope='col'>Accion</th>
                </tr>
            </thead>
            <tbody>
            {datos.profesores.map((alumno, index) =>{
              const propiedades = Object.keys(alumno);
              const valores = Object.values(alumno);
              const valoresFiltrados = valores.slice(1, -2);

              return(
                <tr key={index}>
                  {valoresFiltrados.map((valor, index) =>(
                    <td key={index}>{typeof valor === "number" ? valor.toFixed(2) : valor}</td>
                  ))}
                  </tr>);
            })}
            </tbody>
          </table>
          </div>
  );
          };

 

export default Table;
