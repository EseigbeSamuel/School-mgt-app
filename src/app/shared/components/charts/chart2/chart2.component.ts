import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { share } from 'rxjs';
import { SharedModule } from '../../../shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart2',
  standalone: true,
  imports: [NgApexchartsModule, SharedModule, CommonModule, FormsModule],
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css'],
})
export class Chart2Component implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  isDesktop = window.innerWidth >= 768;
  public chartOptions: any;
  height: any;

  filterOptions = ['Month', '30 Days', '7 Days'];
  selectedFilter = 'Month';

  setFilter(option: string) {
    this.selectedFilter = option;
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
      this.height = this.isDesktop ? 400 : 300;

      this.updateChartOptions();
    });

    this.updateChartOptions();
  }

  private updateChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: 'Morning',
          data: [20, 30, 35, 25, 28, 32, 34, 30, 35, 25, 30, 28],
        },
        {
          name: 'Afternoon',
          data: [25, 35, 30, 28, 34, 29, 35, 36, 32, 28, 29, 31],
        },
        {
          name: 'Evening',
          data: [40, 45, 48, 42, 46, 50, 47, 48, 45, 44, 42, 43],
        },
      ],
      chart: {
        type: 'bar',
        height: this.height || 400,
        toolbar: {
          show: false,
        },
      },
      colors: ['#883DCF', '#F98550', '#2BB2FE'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: this.isDesktop ? '50%' : '60%',
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
        colors: ['transparent'],
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
        labels: {
          style: {
            colors: '#667085',
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        show: this.isDesktop ? true : true,
        position: this.isDesktop ? 'left' : 'top',
        tickAmount: 5,
        min: 0,
        max: 60,
        labels: {
          formatter: (val: number) => {
            if (this.isDesktop) {
              if (val <= 10) return '00-10 hrs';
              if (val <= 20) return '10-20 hrs';
              if (val <= 30) return '20-30 hrs';
              if (val <= 40) return '30-40 hrs';
              if (val <= 50) return '40-50 hrs';
              if (val <= 60) return '50-60 hrs';
            } else {
              if (val <= 10) return '10 hrs';
              if (val <= 20) return '20 hrs';
              if (val <= 30) return '30 hrs';
              if (val <= 40) return '40 hrs';
              if (val <= 50) return '50 hrs';
              if (val <= 60) return '60 hrs';
            }
            return '';
          },
          style: {
            colors: '#000',
            fontSize: this.isDesktop ? '12px' : '10px',
          },
        },
      },
      legend: {
        position: this.isDesktop ? 'top' : 'bottom',
        horizontalAlign: this.isDesktop ? 'right' : 'center',
        markers: { radius: 12 },
        labels: { colors: '#000' },
      },
      fill: {
        colors: ['#883DCF', '#F98550', '#2BB2FE'],
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val} hrs`,
        },
        colors: ['#883DCF', '#F98550', '#2BB2FE'],
      },
    };
  }
}
