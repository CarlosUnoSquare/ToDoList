import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { ToDoModel, ToDoStatus } from '../../../models/toDo.model.s';
import { TodoUpdateComponent } from '../todo-update/todo-update.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoPendingList: Array<ToDoModel>;
  todoOnGoingList: Array<ToDoModel>;
  todoCompletedList: Array<ToDoModel>;

  todoEmitted: ToDoModel;
  @ViewChild(TodoUpdateComponent) todoUpdateComp: TodoUpdateComponent;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems() {
    this.todoService.getAllTodos().subscribe((response) => {
      const data = response.data;
      this.todoPendingList = data.filter(
        (t: ToDoModel) => t.status == ToDoStatus.toDo
      );
      this.todoOnGoingList = data.filter(
        (t: ToDoModel) => t.status == ToDoStatus.onGoing
      );
      this.todoCompletedList = data.filter(
        (t: ToDoModel) => t.status == ToDoStatus.completed
      );
    });
  }

  updateTodo(todoEvent: any) {
    this.todoEmitted = { ...todoEvent };
    console.log(this.todoEmitted);
    this.todoUpdateComp.form.setValue({
      title: this.todoEmitted.title,
      status: this.todoEmitted.status,
    });
  }
}
