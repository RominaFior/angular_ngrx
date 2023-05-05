import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemsState } from '@core/models';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectItemsList = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
);
