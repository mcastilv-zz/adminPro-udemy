import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input('chartLabels') public doughnutChartLabels: string[] = [];
  @Input('chartData') public doughnutChartData: number[] = [];
  @Input('chartType') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
