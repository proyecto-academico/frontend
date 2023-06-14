// Importa la biblioteca de Chart.js
import Line from 'react-chartjs-2';
import React, {Fragment} from 'react';
import LinesChart from '../../../LinesChart';

function ChartNotasCursosGraficos() {
  // Obtén los datos de la API
  return(
    <Fragment>
      <h1>Grafico en líneas básicos</h1>
      <div>
        <LinesChart/>
      </div>
    </Fragment>
  );
}

export default ChartNotasCursosGraficos;
/*
 // Crea un contexto para el gráfico
  const ctx = document.getElementById('mi-grafico').getContext('2d');

  // Crea el gráfico de puntos
  const miGrafico = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Notas en Bimestres',
          data: notas.map(nota => ({x: nota.bimestre, y: nota.nota_bimestral})),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Notas en Cuatrimestres',
          data: notas.map(nota => ({x: nota.cuatrimestre, y: nota.nota_cuatrimestral})),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  });
*/