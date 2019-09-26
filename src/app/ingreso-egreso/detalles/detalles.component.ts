/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStage } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IngresoEgresoService } from '../../services/ingreso-egreso.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: []
})
export class DetallesComponent implements OnInit {
  subscription: Subscription;
  items: IngresoEgreso[];

  /**
   * Contructor
   *
   * @param store
   */
  constructor(
    private store: Store<AppStage>,
    private ieService: IngresoEgresoService
  ) {
    this.subscription = new Subscription();
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
      .pipe(
        map(value => value.items)
      ).subscribe(items => this.items = items);
  }

  /**
   * Delete id
   *
   * @param item
   */
  deleteItem(item: IngresoEgreso) {

      Swal.fire({
        title: 'Are you sure?',
        text: `Do you want delet ${item.description}`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

        if (result.value) {
          this.ieService.deleteIngresoEgreso(item.id).then(() =>
            Swal.fire('Deleted!', `${item.description} was deleted.`, 'success')
          );
        }

      });

  }

}
