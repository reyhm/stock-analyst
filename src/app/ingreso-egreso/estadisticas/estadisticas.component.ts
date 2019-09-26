/* tslint:disable:typedef-whitespace no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { Label, MultiDataSet } from 'ng2-charts';

import { Store } from '@ngrx/store';
import { IEState } from '../../ngrx/reducers/ingreso-egreso.reducer';

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

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public chartColors: Array<any> = [
    { backgroundColor: ['#46a5d4', '#fe8081'] }
  ];
  public doughnutChartData: MultiDataSet = [];

  /**
   * Constructor
   *
   * @param store
   */
  constructor(
    private store: Store<IEState>
  ) { }

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
