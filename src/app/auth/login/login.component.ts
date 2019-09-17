import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppStage } from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
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

  login(data: any) {
    this.authService.login(data.email, data.pass);
  }

}
