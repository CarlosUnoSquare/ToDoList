import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { TodoState } from '../reducers/todo.reducer';

const feature = (state: AppState) => state.todo;

export const todoSelector = createSelector(
  feature,
  (state: TodoState) => state.todos
);
