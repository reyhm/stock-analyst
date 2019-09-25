/* tslint:disable:no-trailing-whitespace */
import * as fromIE from '../actions/ingreso-egreso.action';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';


export interface IngresoEgresoState {
  items: IngresoEgreso[];
}

const initState: IngresoEgresoState = {
  items: []
};

export function IngresoEgresoReducer(state = initState, action: fromIE.actions): IngresoEgresoState {

  switch (action.type) {

    case fromIE.SET_ITEMS:
      return {
        items: [
          ...action.items.map((item) => {
            return {...item};
          })
        ]
      };

    case fromIE.UNSET_ITEMS:
      return { items: [] };

    default:
      return state;

  }

}
