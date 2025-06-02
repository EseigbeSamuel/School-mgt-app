import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart2',
  standalone: true,
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css'],
})
export class Chart2Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  private myChart!: echarts.ECharts;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initChart();
    }, 1000);
  }

  private initChart(): void {
    const chartDom = this.chartContainer.nativeElement;
    this.myChart = echarts.init(chartDom);
    echarts.registerTheme('myTheme', {
      color: ['red', '#2f4554', '#61a0a8', '#d48265'],
      backgroundColor: '#f5f5f5',
      textStyle: {
        fontFamily: 'Arial, sans-serif',
      },
    });
    const labelOption: echarts.BarSeriesOption['label'] = {
      show: false,
      position: 'insideBottom' as const,
      distance: 15,
      align: 'left' as const,
      verticalAlign: 'middle' as const,
      rotate: 90,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {},
      },
    };

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['2012', '2013', '2014', '2015', '2016'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390],
        },
        {
          name: 'Steppe',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290],
        },
        {
          name: 'Desert',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190],
        },
        {
          name: 'Wetland',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [98, 77, 101, 99, 40],
        },
      ],
    };

    this.myChart.setOption(option);

    window.addEventListener('resize', this.resizeHandler);
  }

  private resizeHandler = () => {
    this.myChart?.resize();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    this.myChart?.dispose();
  }
}
