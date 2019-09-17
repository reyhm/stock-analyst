import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppStage } from '../../app.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  loading: boolean;

  constructor(
    private authService: AuthService,
    private store: Store<AppStage>
  ) { }

  ngOnInit() {
    this.store.select('ui')
      .subscribe(value =>
        this.loading = value.isLoading
      );
  }

  /**
   * onSubmit
   *
   * @param data
   */
  onSubmit(data: any) {
    this.authService
      .registerUser(data.name, data.email, data.password);
  }

}
