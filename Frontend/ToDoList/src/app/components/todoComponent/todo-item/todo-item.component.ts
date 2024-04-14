import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoModel, ToDoStatus } from '../../../models/toDo.model.s';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDoModel;
  @Output() emitTodoEvent = new EventEmitter<ToDoModel>();

  ngOnInit(): void {}

  getStatus(status: ToDoStatus) {
    let statusLabel: string = 'To-Do';
    switch (status) {
      case ToDoStatus.onGoing:
        statusLabel = 'In Progress';
        break;
      case ToDoStatus.completed:
        statusLabel = 'Completed';
        break;
      default:
        break;
    }
    return statusLabel;
  }

  emitTodo(todo: ToDoModel) {
    const todoToUpdate = { ...todo };
    this.emitTodoEvent.emit(todoToUpdate);
  }
}
