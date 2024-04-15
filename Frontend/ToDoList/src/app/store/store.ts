import { Action, ActionReducer } from "@ngrx/store";
import { TodoReducer, TodoState } from "./reducers/todo.reducer";
import { TodoEffects } from "./effects/todo.effect";

export interface AppState {
  todo: TodoState
}

export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
}

export const appStore: AppStore = {
  todo: TodoReducer
}

export const appEffects = [TodoEffects];
