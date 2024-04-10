import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoComponentsModule } from './components/todoComponent/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
