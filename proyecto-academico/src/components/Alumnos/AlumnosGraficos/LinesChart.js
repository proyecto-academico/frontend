import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

const LinesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Sales',
              data: [12, 19, 3, 5, 2, 3, 8],
              borderColor: 'rgba(0, 123, 255, 1)',
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category', // Utiliza 'category' como el tipo de escala para el eje x
              beginAtZero: true,
            },
            y: {
              type: 'linear',
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default LinesChart;