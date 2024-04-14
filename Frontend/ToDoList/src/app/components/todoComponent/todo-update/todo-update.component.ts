import { Input, Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { ToDoModel } from '../../../models/toDo.model.s';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.scss',
})
export class TodoUpdateComponent {
  form: FormGroup;
  @Input() todo: ToDoModel;
  @ViewChild('closeUpdateToDoDialog') closeUpdateToDoDialog: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private todoServices: TodoService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.form = this.formBuilder.group(
      {
        title: this.formBuilder.control('', Validators.required),
        status: this.formBuilder.control('', Validators.required),
      },
      { updateOn: 'change' }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const todoUpdated = { ...this.form.value };
      todoUpdated.status = +todoUpdated.status;
      this.todoServices
        .updateTodos(this.todo.id, todoUpdated)
        .subscribe((res) => {
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
    this.closeUpdateToDoDialog.nativeElement.click();
  }
}
