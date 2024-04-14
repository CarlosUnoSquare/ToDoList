import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ToDoModel } from '../../../models/toDo.model.s';
import { timeout } from 'rxjs';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent implements OnInit {
  form: FormGroup;
  todo: ToDoModel;
  @ViewChild('closeAddTodoDialog') closeAddTodoDialog: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private todoServices: TodoService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.form = this.formBuilder.group(
      { title: this.formBuilder.control('', Validators.required) },
      { updateOn: 'change' }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.todo = { ...this.form.value };
      this.todoServices.postTodos(this.todo).subscribe((res) => {
        this.closeModal();
      });
    }
  }

  onResetForm(todoForm: FormGroupDirective) {
    setTimeout(() => {
      this.form.reset();
      todoForm.resetForm();
    }, 100);
  }

  closeModal() {
    this.closeAddTodoDialog.nativeElement.click();
  }
}
