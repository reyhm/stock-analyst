import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
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
