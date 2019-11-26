import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

interface Todo {
  name: string;
  completed: boolean;
}

@Component({
  // providers: [TodoService],
  selector: 'app-todo-s',
  templateUrl: './todo-s.component.html',
  styleUrls: ['./todo-s.component.scss']
})
export class TodoSComponent implements OnInit {
  todos: any | Todo[] = [];
  message;

  constructor(private service: TodosService) {}

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
