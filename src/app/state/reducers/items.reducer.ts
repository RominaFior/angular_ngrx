import { ItemsState } from '@core/models';
import { createReducer, on } from '@ngrx/store';
import { LoadItems, LoadedItems } from '../actions/items.actions';

export const initialState: ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(LoadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(LoadedItems, (state, { items }) => {
    return { ...state, loading: false, items };
  })
);
