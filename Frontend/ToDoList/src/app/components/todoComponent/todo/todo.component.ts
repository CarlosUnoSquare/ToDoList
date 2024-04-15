import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { ToDoModel, ToDoStatus } from '../../../models/toDo.model.s';
import { TodoUpdateComponent } from '../todo-update/todo-update.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/store';
import { todoSelector } from '../../../store/selectors/todo.selector';
import * as TodoActions from '../../../store/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoList: Observable<Array<ToDoModel>>;
  todoPendingList: Array<ToDoModel>;
  todoOnGoingList: Array<ToDoModel>;
  todoCompletedList: Array<ToDoModel>;

  todoEmitted: ToDoModel;
  @ViewChild(TodoUpdateComponent) todoUpdateComp: TodoUpdateComponent;

  constructor(private store: Store<AppState>) {;
  }

  ngOnInit(): void {
    this.todoList = this.store.select(todoSelector);
    this.todoList.subscribe(todos => {
      this.todoPendingList = todos.filter(t => t.status == ToDoStatus.toDo);
      this.todoOnGoingList = todos.filter(t => t.status == ToDoStatus.onGoing);
      this.todoCompletedList = todos.filter(t => t.status == ToDoStatus.completed);
    })
    this.loadTodoItems();
  }

  loadTodoItems() {
    this.store.dispatch(TodoActions.LOAD_TODO());
  }

  updateTodo(todoEvent: any) {
    this.todoEmitted = { ...todoEvent };
    this.todoUpdateComp.form.setValue({
      title: this.todoEmitted.title,
      status: this.todoEmitted.status,
    });
  }
}
