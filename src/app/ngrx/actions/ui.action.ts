import { Action } from '@ngrx/store';


export const LOADING_UI = '[UI] Loading';
export const LOADED_UI = '[UI] Loaded';


export class LoadingUIAction implements Action {
  readonly type = LOADING_UI;
}

export class LoadedUIAction implements Action {
  readonly type = LOADED_UI;
}


export type actions = LoadingUIAction | LoadedUIAction;
