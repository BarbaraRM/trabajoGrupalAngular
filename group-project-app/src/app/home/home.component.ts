import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NavigationComponent } from '../navbar/navigation.component'; // Importa el componente Navigation

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NavigationComponent] // Agrega NavigationComponent a los imports
})
export class HomeComponent implements AfterViewInit {
  activeFilter: 'all' | 'expenses' | 'income' = 'all'; // Filtro activo
  chart: any;

  data = {
    all: [500, 300, 200, 400, 100],
    expenses: [300, 200, 100, 400, 50],
    income: [200, 100, 100, 0, 50]
  };

  constructor() {
    Chart.register(...registerables); // Registra todos los componentes de Chart.js
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  changeFilter(filter: 'all' | 'expenses' | 'income') {
    this.activeFilter = filter;
    this.renderChart();
  }

  renderChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1 nov', '9 nov', '16 nov', '24 nov', '1 dic'],
        datasets: [
          {
            label: 'Valores',
            data: this.data[this.activeFilter],
            borderColor: '#4caf50', // Línea verde
            backgroundColor: 'rgba(76, 175, 80, 0.2)', // Área bajo la curva
            borderWidth: 2,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ajuste para pantallas pequeñas
        plugins: {
          legend: { display: false }, // Oculta la leyenda
          tooltip: {
            backgroundColor: '#292c31', // Fondo del tooltip
            titleColor: '#fff', // Color del título
            bodyColor: '#fff' // Color del texto
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#ccc' // Color del texto en eje X
            }
          },
          y: {
            ticks: {
              color: '#ccc' // Color del texto en eje Y
            },
            beginAtZero: true
          }
        }
      }
    });
  }
}
