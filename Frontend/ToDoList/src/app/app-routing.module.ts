import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { authGuard } from './guards/auth.guard';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'todo', component: TodoPageComponent, canActivate: [authGuard]},
  { path: '**', component: NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
