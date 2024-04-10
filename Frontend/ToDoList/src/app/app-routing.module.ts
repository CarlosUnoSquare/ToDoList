import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'todo', component: TodoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
