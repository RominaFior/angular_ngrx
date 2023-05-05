import { ItemsState } from '@core/models';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './reducers';

export interface AppState {
  items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
