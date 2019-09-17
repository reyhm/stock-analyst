import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';


export const SET_USER        = '[Auth] Set User';
export const CLEAR_DATA_USER = '[Auth] Clear Data User';


export class SetUserAction implements Action {
  readonly type = SET_USER;

  constructor( public user: User ) {}
}

export class ClearDataUserAction implements Action {
  readonly type = CLEAR_DATA_USER;
}

export type actions = SetUserAction | ClearDataUserAction;
