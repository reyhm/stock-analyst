import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  /**
   * Constructor
   *
   * @param private
   */
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  /**
   * LogOut
   */
  logOut() {
    this.authService.logOut();
  }

}
