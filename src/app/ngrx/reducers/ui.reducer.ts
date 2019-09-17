import * as fromUI from '../actions/ui.action';


export interface Stage {
  isLoading: boolean;
}

const stageInit: Stage = {
  isLoading: false
};

export function UIReducer(stage = stageInit, action: fromUI.actions): Stage {

  switch (action.type) {
    case fromUI.LOADING_UI:
      return { isLoading: true };

    case fromUI.LOADED_UI:
      return { isLoading: false };

    default:
      return stage;
  }

}
