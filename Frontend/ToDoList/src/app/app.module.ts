import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './components/todoComponent/todo-add/todo-add.component';
import { TodoDeleteComponent } from './components/todoComponent/todo-delete/todo-delete.component';
import { TodoItemComponent } from './components/todoComponent/todo-item/todo-item.component';
import { TodoUpdateComponent } from './components/todoComponent/todo-update/todo-update.component';
import { LoginFormComponent } from './components/loginComponent/login-form/login-form.component';
import { LoginInformationCardComponent } from './components/loginComponent/login-information-card/login-information-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todoComponent/todo/todo.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { provideStore } from '@ngrx/store';
import { appEffects, appStore } from './store/store';
import { TodoService } from './services/todo.service';
import { provideEffects } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    LoginPageComponent,
    TodoAddComponent,
    TodoDeleteComponent,
    TodoItemComponent,
    TodoUpdateComponent,
    LoginFormComponent,
    LoginInformationCardComponent,
    TodoComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideStore(appStore),
    provideEffects(appEffects),
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
