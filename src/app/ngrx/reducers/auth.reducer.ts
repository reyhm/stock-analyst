import { User } from '../../models/user.model';
import * as fromAuth from '../actions/auth.action';


export interface AuthState {
  user: User;
}


const initState: AuthState = {
  user: null
};

export function authReducer(state = initState, action: fromAuth.actions): AuthState {

  switch (action.type) {

    case fromAuth.SET_USER:
      return {
        user: { ... action.user }
      };

    case fromAuth.CLEAR_DATA_USER:
      return { user: null };

    default:
      return state;

  }

}
