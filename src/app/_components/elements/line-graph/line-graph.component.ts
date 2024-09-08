import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js/auto';
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent {
  @Input()hours:string [] = []
  @Input()rates:number [] = []
  constructor() { }
  sum: number = 0;
  @ViewChild('myChart') myChart?: ElementRef;
  private chart?: Chart<'line'>;
  pieChartLegend = true
  pieChartPlugins = []

  public pieChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };

  ngOnInit(): void {

   
  }
  ngAfterViewInit(): void {
    if (!this.myChart) return;

    const canvas = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match container
    canvas.width = canvas.parentElement?.clientWidth || 0;
    canvas.height = canvas.parentElement?.clientHeight || 0;

    // Example drawing
    if (ctx) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  

  

    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
          labels: this.hours,
          datasets: [{
              label: 'Bitcoin',
              data: this.rates,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              fill: false, // Disables fill under the line
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false // Hides the legend
              },
              tooltip: {
                  enabled: false // Disables tooltips
              }
          },
          scales: {
              x: {
                  display: false // Hides the x-axis
              },
              y: {
                  display: false // Hides the y-axis
              }
          },
          elements: {
              point: {
                  radius: 0 // Hides the points
              }
          }
      }
    })

  }


  updateChart(array: number[]) {
    // Simulate fetching new data

    if (this.chart && array) {
      let data = this.chart.data.datasets[0].data;
      //the specific index which is 2

      data[0] = Number(array[0])
      data[1] = Number(array[1])
      data[2] = Number(array[2])
      data[3] = Number(array[3])
      data[4] = Number(array[4])
      console.log(data);
      this.chart.data.datasets[0].data = data;
      this.chart.update();
    }
    // Update the entire chart

  }
}
