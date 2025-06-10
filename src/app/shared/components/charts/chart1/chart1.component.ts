import { Component, ViewChild, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';

@Component({
  selector: 'app-chart1',
  imports: [NgApexchartsModule],
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.css',
})
export class Chart1Component implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: any;
  isDesktop = window.innerWidth >= 768;
  height: any;

  ngOnInit() {
    this.height = this.isDesktop ? 350 : 250;
    this.updateChartOptions();

    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
      this.height = this.isDesktop ? 400 : 300;
      this.updateChartOptions();
    });
  }

  private updateChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: 'Earnings',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 9.6, 3.2, 2.3, 1.4, 6.8, 0.5, 20],
        },
      ],

      colors: ['#2C2A72'],

      chart: {
        height: this.height || 400,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },

          colors: {
            ranges: [
              {
                from: 0,
                to: 5,
                color: '#667085',
              },
              {
                from: 5.1,
                to: 8,
                color: '#2C2A72',
              },
              {
                from: 8.1,
                to: 15,
                color: '#2C2A72',
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        position: 'top',
        labels: {
          offsetY: -18,
          style: {
            colors: '#666666',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#667085',
              colorTo: '#2C2A72',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
            color: '#2C2A72',
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: ['#667085'],
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.9,
          stops: [0, 50, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '%';
          },
        },
      },
      title: {
        text: 'Month',
        floating: 0,
        offsetY: -320,
        align: 'top',
        style: {
          color: '#444',
          fontSize: '14px',
        },
      },
    };
  }
}
