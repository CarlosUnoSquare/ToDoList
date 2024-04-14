import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/API/APIResponse';
import { ToDoModel, ToDoStatus } from '../models/toDo.model.s';
import { httpClientOptions } from './httpOptions';


@Injectable({
  providedIn: 'root'
})

export class TodoService {
  
  private baseUrl = `${environment.baseAPIUrl}/todo`;

  constructor(private http: HttpClient) { 
  }

  getAllTodos(): Observable<APIResponse<Array<ToDoModel>>> {
    return this.http.get<APIResponse<Array<ToDoModel>>>(this.baseUrl,  httpClientOptions())
  }

  postTodos(todo:ToDoModel): Observable<APIResponse<ToDoModel>> {
    todo.status = ToDoStatus.toDo;
    return this.http.post<APIResponse<ToDoModel>>(this.baseUrl, todo,  httpClientOptions())
  }

  updateTodos(todoId:string, todo:ToDoModel):  Observable<APIResponse<ToDoModel>>  {
    return this.http.put<APIResponse<ToDoModel>>(`${this.baseUrl}/${todoId}`, todo,  httpClientOptions())
  }

  deleteTodos(todoId: string):  Observable<APIResponse<boolean>> {
    return this.http.delete<APIResponse<boolean>>(`${this.baseUrl}/${todoId}`,  httpClientOptions())
  }
}
