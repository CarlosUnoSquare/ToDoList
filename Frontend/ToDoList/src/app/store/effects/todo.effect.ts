import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import * as TodoActions from '../actions/todo.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.LOAD_TODO),
      mergeMap(() =>
        this.todoService.getAllTodos().pipe(
          map((response) =>
            TodoActions.LOAD_TODO_SUCCESS({ todos: response.data })
          ),
          catchError((error) =>
            of(TodoActions.LOAD_TODO_FAILURE({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
