import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

interface Todo {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any | Todo[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => (this.todos = t));
  }

  add() {
    const newTodo = { name: '... ', completed: true };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => (this.message = err)
    );
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
