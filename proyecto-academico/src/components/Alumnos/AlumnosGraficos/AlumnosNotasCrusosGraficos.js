// Importa la biblioteca de Chart.js
import Chart from 'chart.js';

// Obtén los datos de la API
const notas = await fetch('https://api.example.com/notas').then(res => res.json());

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
