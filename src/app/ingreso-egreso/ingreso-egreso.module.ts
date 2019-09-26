import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { OrderIngresoEgresoPipe } from '../pipes/order-ingreso-egreso.pipe';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    DetallesComponent,
    EstadisticasComponent,

    OrderIngresoEgresoPipe
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    ShareModule,
    DashboardRoutingModule
  ]
})
export class IngresoEgresoModule { }
