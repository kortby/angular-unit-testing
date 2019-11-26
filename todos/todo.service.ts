import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Todo {
  name: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo) {
    return this.http.post<Todo>('...', todo).pipe(map(r => r || []));
  }

  getTodos() {
    return this.http.get<Todo>('...').pipe(map(r => r || []));
  }

  delete(id) {
    return this.http.delete<Todo>('...').pipe(map(r => r || []));
  }
}
