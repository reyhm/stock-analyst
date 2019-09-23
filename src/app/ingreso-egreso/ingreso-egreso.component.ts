/* tslint:disable:no-trailing-whitespace */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';

import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoadedUIAction, LoadingUIAction } from '../ngrx/actions/ui.action';
import { AppStage } from '../app.reducer';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  type: string;
  loading = false;
  subscribe: Subscription;

  /**
   * Contructor
   *
   * @param ieService
   * @param store
   */
  constructor(
    private ieService: IngresoEgresoService,
    private store: Store<AppStage>
  ) {
    this.subscribe = new Subscription();
    this.type = 'ingreso';
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });

    this.subscribe = this.store.select('ui')
      .subscribe((uiStage) => this.loading = uiStage.isLoading);
  }

  /**
   * Ingreso egreso
   */
  addIngresoEgreso() {
    this.store.dispatch( new LoadingUIAction() );
    const data = new IngresoEgreso({...this.form.value, type: this.type});

    this.ieService.addIngresoEgreso( data )
      .then(() => {
        this.store.dispatch( new LoadedUIAction() );
        Swal.fire('Created', `the ${this.type} was creted successful`, 'success');
      })
      .catch(err => {
        this.store.dispatch( new LoadedUIAction() );
        console.log('Error: ', err);
      });
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
