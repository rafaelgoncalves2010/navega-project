import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcElement, Chart, DoughnutController, Legend, Tooltip } from 'chart.js';

@Component({
  selector: 'app-contribution-graphic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribution-graphic.component.html',
  styleUrls: ['./contribution-graphic.component.less']
})
export class ContributionGraphicComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas!: ElementRef;
  doughnutChart: any;

  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() backgroundColor: string[] = [];

  constructor(){
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  }

  ngAfterViewInit() {
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.backgroundColor,
            hoverBackgroundColor: this.backgroundColor,
            borderWidth: 0
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: {
            display: false
          },
        }
      },
    });
  }
}
