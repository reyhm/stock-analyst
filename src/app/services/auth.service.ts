import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Constructor
   *
   * @param afAuth
   * @param router
   */
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  /**
   * Register user
   *
   * @param name
   * @param email
   * @param pass
   */
  registerUser(name: string, email: string, pass: string) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, pass)
      .then(resp => {
        console.log(resp);
        this.router.navigate(['/']);
      })
      .catch(err => {
        Swal.fire('Error try to register user', err.message, 'error');
        console.error(err);
      });
  }

  /**
   * Login
   *
   * @param email
   * @param pass
   */
  login(email: string, pass: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, pass)
      .then(resp => {
        console.log('Auth: true');
        this.router.navigate(['/']);
      })
      .catch(err => {
        Swal.fire('Error try to register user', err.message, 'error');
        console.log(err);
      });
  }

  /**
   * LogOut
   */
  logOut() {
    this.afAuth.auth.signOut()
      .then(resp => {
        console.log('signOut: true');
        this.router.navigate(['/login']);
      });
  }

}
