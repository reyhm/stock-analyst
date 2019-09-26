import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStage } from '../../app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  authData: Observable<any>;

  /**
   * Constructor
   *
   * @param store
   */
  constructor(
    private store: Store<AppStage>
  ) {
    this.authData = new Observable<any>();
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.authData = this.store.select('auth')
      .pipe(map(value => value.user));
  }

}
