import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appId = 'skj876dsKJHBbw4';

  /**
   * Constructor
   *
   * @param afAuth
   * @param afDB
   * @param router
   */
  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router
  ) {
  }

  /**
   * Init Listener
   */
  initListener() {
    this.afAuth.auth
      .onAuthStateChanged((fbState: firebase.User) => {
        console.log(fbState);
    });
  }

  /**
   * Is auth
   */
  isAuth() {
    return this.afAuth.authState
      .pipe(
        map(data => {
          if (data == null) {
            this.router.navigate(['/login']);
          }

          return data != null;
        })
      );
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

        const user: User = {
          id: resp.user.uid, name, email
        };

        this.afDB.doc(`${this.appId}/users`)
          .set(user)
          .then(() => {
            console.log(resp);
            this.router.navigate(['/']);
          });
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
