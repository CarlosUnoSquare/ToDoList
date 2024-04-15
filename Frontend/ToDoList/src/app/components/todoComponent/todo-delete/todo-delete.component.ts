import { Input, Component, ViewChild, ElementRef } from '@angular/core';
import { ToDoModel } from '../../../models/toDo.model.s';
import { TodoService } from '../../../services/todo.service';
import { Store } from '@ngrx/store';
import { DELETE_TODO } from '../../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrl: './todo-delete.component.scss',
})
export class TodoDeleteComponent {
  @ViewChild('closeDeleteToDoDialog') closeDeleteToDoDialog: ElementRef;

  @Input() todo: ToDoModel;
  constructor(private store: Store, private todoServices: TodoService) {}

  deleteTodo() {
    this.todoServices.deleteTodos(this.todo.id).subscribe((res) => {
      if (res.data == true) {
        this.store.dispatch(DELETE_TODO({todo: this.todo}));
        this.closeDeleteToDoDialog.nativeElement.click();
      }
    });
  }
}
