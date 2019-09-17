import * as fromUI from './ngrx/reducers/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppStage {
  ui: fromUI.Stage;
}

export const appReducers: ActionReducerMap<AppStage> = {
  ui: fromUI.UIReducer
};
