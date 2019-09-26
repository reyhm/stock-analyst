/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  /**
   * Constructor
   *
   * @param dfDB
   * @param authService
   */
  constructor(
    private dfDB: AngularFirestore,
    private authService: AuthService
  ) { }

  /**
   * Add ingreso egreso
   *
   * @param ingresoEgreso
   */
  addIngresoEgreso(ingresoEgreso: IngresoEgreso) {

    const user = this.authService.getUser();

    return this.dfDB.doc(`${user.id}/ingreso-egresos`)
      .collection('items')
      .add({...ingresoEgreso});

  }

  /**
   * Delete ingreso egreso
   *
   * @param id
   */
  deleteIngresoEgreso(itemId: string) {

    const user = this.authService.getUser();

    return this.dfDB.doc(`${user.id}/ingreso-egresos/items/${itemId}`)
      .delete();

  }
}
