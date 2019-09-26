import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppStage } from '../../app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  userData$: Observable<any>;

  /**
   * Constructor
   *
   * @param authService
   * @param store
   */
  constructor(
    private authService: AuthService,
    private store: Store<AppStage>
  ) {
    this.userData$ = new Observable<any>();
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.userData$ = this.store.select('auth')
      .pipe(map(value => value.user));
  }

  /**
   * LogOut
   */
  logOut() {
    this.authService.logOut();
  }

}
