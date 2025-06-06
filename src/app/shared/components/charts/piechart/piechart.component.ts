import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-piechart',
  imports: [NgApexchartsModule],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css',
})
export class PiechartComponent {
  @ViewChild('chart') chart: ChartComponent | undefined;

  isDesktop = window.innerWidth >= 768;
  public chartOptions: any;
  height: any;

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
      this.height = this.isDesktop ? 300 : 200;

      this.updateChartOptions();
    });

    this.updateChartOptions();
  }

  private updateChartOptions() {
    this.chartOptions = {
      series: [44, 55, 13],
      chart: {
        width: '100%',
        type: 'pie',
        height: this.height || 300,
      },
      labels: ['Quiz', 'Submission', 'Mock exams'],

      colors: ['#FF4A4A', '#FFCC00', '#3BA94A', '#10B981', '#EF4444'],
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  constructor() {}
}
