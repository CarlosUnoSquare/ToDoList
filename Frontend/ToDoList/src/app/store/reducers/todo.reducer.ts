import { createReducer, on } from '@ngrx/store';
import { ToDoModel, ToDoStatus } from '../../models/toDo.model.s';
import * as TodoActions from '../actions/todo.actions';

export interface TodoState {
  todos: ToDoModel[];
  loading: boolean;
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: '',
};
export const TodoReducer = createReducer(
  initialState,

  on(TodoActions.LOAD_TODO, (state) => ({ ...state, loading: true })),

  on(TodoActions.LOAD_TODO_SUCCESS, (state, { todos }) => ({
    ...state,
    todos: todos,
    loading: false,
  })),

  on(TodoActions.ADD_TODO, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),

  on(TodoActions.UPDATE_TODO, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t))
  })),

  on(TodoActions.DELETE_TODO, (state, { todo }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== todo.id)
  }))
);
