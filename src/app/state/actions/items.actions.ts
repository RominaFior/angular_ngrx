import { ItemModel } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const LoadItems = createAction('[Item List] Load items');

export const LoadedItems = createAction(
  '[Item List] Successfully loaded',
  props<{ items: ItemModel[] }>()
);
