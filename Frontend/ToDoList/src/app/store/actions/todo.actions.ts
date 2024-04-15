import { createAction, props } from "@ngrx/store";
import { ToDoModel } from "../../models/toDo.model.s";

export const LOAD_TODO = createAction('[Todo] Load Todos');
export const LOAD_TODO_SUCCESS = createAction('[Todo] Load Todos Success', props<{ todos: ToDoModel[] }>());
export const LOAD_TODO_FAILURE = createAction('[Todo] Load Todos Failure', props<{ error: string }>());
export const ADD_TODO = createAction('[Todo] Add Todo', props<{ todo: ToDoModel }>());
export const UPDATE_TODO = createAction('[Todo] Update Todo', props<{ todo: ToDoModel }>());
export const DELETE_TODO = createAction('[Todo] Delete Todo', props<{ todo: ToDoModel }>());