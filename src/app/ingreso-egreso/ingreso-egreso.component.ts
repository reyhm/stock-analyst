/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {
  form: FormGroup;
  type: string;
  loading = false;

  /**
   * Contructor
   *
   * @param ieService
   */
  constructor(
    private ieService: IngresoEgresoService
  ) {
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
  }

  /**
   * Ingreso egreso
   */
  addIngresoEgreso() {
    this.loading = true;
    const data = new IngresoEgreso({...this.form.value, type: this.type});

    this.ieService.addIngresoEgreso( data )
      .then(() => {
        this.loading = false;
        Swal.fire('Created', `the ${this.type} was creted successful`, 'success');
      })
      .catch(err => {
        this.loading = false;
        console.log('Error: ', err);
      });
  }

}
