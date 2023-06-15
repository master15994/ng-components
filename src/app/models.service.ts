import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IResponse } from './models/response';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<IResponse>('https://dummyjson.com/todos')
      .pipe(map((res) => res.todos.map((todo) => new Todo(todo))));
  }
}
