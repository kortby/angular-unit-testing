import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [TodoService]
    });
  }));

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should SET todos property with the item returned from the server', () => {
    const todos = [
      { name: 'test', completed: true },
      { name: 'test', completed: true }
    ];
    // Arange
    spyOn(service, 'getTodos').and.callFake(() => {
      return from(todos);
    });
    // Act
    component.ngOnInit();
    // Acert
    expect(Object.keys(component.todos).length).toBe(2);
  });

  it('should call server on add method to SAVE changes when new todo item added ', () => {
    // Arange
    const spy = spyOn(service, 'add').and.callFake(t => {
      return empty();
    });
    // Act
    component.add();
    // Acert
    expect(spy).toHaveBeenCalled();
  });

  it('should ADD new todo returned from the server ', () => {
    // Arange
    const newTodo = { name: 'test', completed: true };
    spyOn(service, 'add').and.callFake(t => {
      return from([newTodo]);
    });
    // Act
    component.add();
    // Acert
    expect(component.todos.indexOf(newTodo)).toBeGreaterThan(-1);
  });

  it('should set the message property if the server returns error when adding NEW todo', () => {
    const error = 'Error from the server!';
    // Arange
    const spy = spyOn(service, 'add').and.callFake(t => {
      return throwError(error);
    });

    // Act
    component.add();
    // Acert
    expect(component.message).toBe('Error from the server!');
  });

  it('should call the server to DELETE todo item selected if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spydelete = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spydelete).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to DELETE todo item selected if the user NOT confirms', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spydelete = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spydelete).not.toHaveBeenCalledWith(1);
  });

  // integration test
});
