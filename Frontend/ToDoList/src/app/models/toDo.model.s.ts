export interface ToDoModel {
  id: string,
  title: string,
  status: ToDoStatus
  isDeleted: boolean,
}

export enum ToDoStatus {
  toDo = 0,
  onGoing = 1,
  completed = 2
}