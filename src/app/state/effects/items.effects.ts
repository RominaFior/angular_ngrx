import { Injectable } from '@angular/core';
import { ShowCaseService } from '@modules/show-case';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {
  
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Item List] Load items'),
      mergeMap(() =>
        this.showCaseService.getDataApi().pipe(
          map((items) => ({ type: '[Item List] Successfully loaded', items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ) {}
}
