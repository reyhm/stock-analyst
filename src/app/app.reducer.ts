import * as fromUI from './ngrx/reducers/ui.reducer';
import * as fromAuth from './ngrx/reducers/auth.reducer';
import * as fromIE from './ngrx/reducers/ingreso-egreso.reducer';

import { ActionReducerMap } from '@ngrx/store';


export interface AppStage {
  ui: fromUI.Stage;
  auth: fromAuth.AuthState;
  ingresoEgreso: fromIE.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppStage> = {
  ui: fromUI.UIReducer,
  auth: fromAuth.authReducer,
  ingresoEgreso: fromIE.IngresoEgresoReducer
};
