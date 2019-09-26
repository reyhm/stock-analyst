import * as fromUI from './ngrx/reducers/ui.reducer';
import * as fromAuth from './ngrx/reducers/auth.reducer';

import { ActionReducerMap } from '@ngrx/store';


export interface AppStage {
  ui: fromUI.Stage;
  auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppStage> = {
  ui: fromUI.UIReducer,
  auth: fromAuth.authReducer
};
