/* tslint:disable:no-trailing-whitespace */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStage } from '../app.reducer';
import { AngularFirestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';
import { SetItemsAction, UnsetItemsAction } from '../ngrx/actions/ingreso-egreso.action';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<any>;

  constructor(
    private store: Store<AppStage>,
    private fbDB: AngularFirestore
  ) {
    this.unsubscribe = new Subject<any>();
  }

  ngOnInit() {
    this.store.select('auth')
      .pipe(
        takeUntil(this.unsubscribe),
        filter(auth => auth.user != null)
      )
      .subscribe((auth => this.ingresoEgresoItems(auth.user.id)));
  }

  private ingresoEgresoItems(id: string) {
    this.fbDB.collection(`${id}/ingreso-egresos/items`)
      .snapshotChanges()
      .pipe(
        takeUntil(this.unsubscribe),
        map(item => {
          return item.map(data => {
            return {
              ...data.payload.doc.data(),
              id: data.payload.doc.id
            };
          });
        })
      )
      .subscribe((items: any[]) => {
        this.store.dispatch(new SetItemsAction(items));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();

    this.store.dispatch( new UnsetItemsAction() );
  }

}
