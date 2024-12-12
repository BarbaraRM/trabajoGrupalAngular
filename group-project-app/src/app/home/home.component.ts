import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NavigationComponent } from '../navbar/navigation.component';
import { IncomeFormComponent } from '../income-form/income-form.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NavigationComponent, IncomeFormComponent],
})
export class HomeComponent implements AfterViewInit {
  activeFilter: 'all' | 'expenses' | 'income' = 'all';
  chart: any;
  data: any = { all: [], expenses: [], income: [] };

  constructor(private dataService: DataService) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.dataService.data$.subscribe((data) => {
      this.data = data;
      this.renderChart();
    });
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
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#292c31',
            titleColor: '#fff',
            bodyColor: '#fff',
          },
        },
        scales: {
          x: {
            ticks: { color: '#ccc' },
          },
          y: {
            ticks: { color: '#ccc' },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
