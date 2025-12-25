import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-product-chart-component',
  standalone: false,
  templateUrl: './product-chart-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductChartComponent implements OnInit {
  @Input() salesData: number[] = [];
  @Input() productName: string = '';

  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Performance'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  ngOnInit(): void {
    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: this.salesData,
          label: `${this.productName} Sales`,
          fill: true,
          tension: 0.4,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)'
        }
      ]
    };
  }
}