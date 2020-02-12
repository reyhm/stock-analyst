import { Component, OnInit } from '@angular/core';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { Label, MultiDataSet } from 'ng2-charts';

import { Store } from '@ngrx/store';
import { IEState } from '../../ngrx/reducers/ingreso-egreso.reducer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styles: []
})
export class EstadisticasComponent implements OnInit {

  ingresos  : number;
  egresos   : number;
  qtyIngreso: number;
  qtyEgreso : number;

  symbol: string;
  data: any;

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public chartColors: Array<any> = [
    { backgroundColor: ['#46a5d4', '#fe8081'] }
  ];
  public doughnutChartData: MultiDataSet = [];

  /**
   * Constructor
   *
   * @param store
   * @param http
   */
  constructor(
    private store: Store<IEState>,
    private http: HttpClient
  ) {
    this.data = {};
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.store.select('ingresoEgreso')
      .subscribe(ingresosEgresos =>
        this.calIngresosEgresos(ingresosEgresos.items)
      );
  }

  /**
   * Get data
   */
  getData() {
    if (!this.symbol || this.symbol === '') {
      return;
    }

    this.http.get(`https://hx53ygw2l4.execute-api.us-east-1.amazonaws.com/prod/test/${this.symbol}`)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  /**
   * Cal ingresos egresos
   *
   * @param items
   */
  calIngresosEgresos(items: IngresoEgreso[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.qtyIngreso = 0;
    this.qtyEgreso = 0;

    items.forEach(item => {
      if (item.type === 'ingreso') {
        this.ingresos += item.amount;
        this.qtyIngreso ++;
      } else {
        this.egresos += item.amount;
        this.qtyEgreso ++;
      }
    });

    this.doughnutChartData = [[this.ingresos, this.egresos]];
  }

}
