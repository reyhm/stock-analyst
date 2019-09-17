import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppStage } from '../app.reducer';
import { LoadedUIAction, LoadingUIAction } from '../ngrx/actions/ui.action';
import { SetUserAction } from '../ngrx/actions/auth.action';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscription: Subscription = new Subscription();

  /**
   * Constructor
   *
   * @param afAuth
   * @param afDB
   * @param router
   * @param store
   */
  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private store: Store<AppStage>
  ) {
  }

  /**
   * Init Listener
   */
  initListener() {
    this.afAuth.auth
      .onAuthStateChanged((fbState: firebase.User) => {
        if (fbState) {
          this.subscription = this.afDB.doc(`${fbState.uid}/users`)
            .valueChanges()
            .subscribe(userData => {
              const user: User = new User(userData);
              this.store.dispatch( new SetUserAction(user) );
            });
        } else {
          this.subscription.unsubscribe();
        }

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
    this.store.dispatch(new LoadingUIAction());

    this.afAuth.auth
      .createUserWithEmailAndPassword(email, pass)
      .then(resp => {

        const user: User = {
          id: resp.user.uid, name, email
        };

        this.afDB.doc(`${user.id}/users`)
          .set(user)
          .then(() => {
            this.router.navigate(['/']);
            this.store.dispatch(new LoadedUIAction());
          });
      })
      .catch(err => {
        Swal.fire('Error try to register user', err.message, 'error');
        this.store.dispatch(new LoadedUIAction());
      });
  }

  /**
   * Login
   *
   * @param email
   * @param pass
   */
  login(email: string, pass: string) {
    this.store.dispatch(new LoadingUIAction());

    this.afAuth.auth
      .signInWithEmailAndPassword(email, pass)
      .then(resp => {
        this.router.navigate(['/']);
        this.store.dispatch(new LoadedUIAction());
      })
      .catch(err => {
        Swal.fire('Error try to register user', err.message, 'error');
        this.store.dispatch(new LoadedUIAction());
      });
  }

  /**
   * LogOut
   */
  logOut() {
    this.afAuth.auth.signOut()
      .then(resp => {
        this.router.navigate(['/login']);
      });
  }

}
