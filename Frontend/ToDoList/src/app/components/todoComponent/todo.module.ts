import { NgModule } from '@angular/core';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoUpdateComponent,
    TodoDeleteComponent,
  ]
})
export class TodoComponentsModule { }
