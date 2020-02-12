import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { ShareModule } from '../share/share.module';
import { StoreModule } from '@ngrx/store';
import { IngresoEgresoReducer } from '../ngrx/reducers/ingreso-egreso.reducer';
import { HttpClientModule } from '@angular/common/http';

import { OrderIngresoEgresoPipe } from '../pipes/order-ingreso-egreso.pipe';
import { KeysPipe } from '../pipes/keys.pipe';
import { ReplacePipe } from '../pipes/replace.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    DetallesComponent,
    EstadisticasComponent,

    OrderIngresoEgresoPipe,
    KeysPipe,
    ReplacePipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    ShareModule,
    DashboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso', IngresoEgresoReducer)
  ]
})
export class IngresoEgresoModule { }
