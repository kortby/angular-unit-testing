import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TodoSComponent } from './todo-s.component';
import { TodosService } from './todos.service';
import { from } from 'rxjs';

describe('TodoSComponent', () => {
  let component: TodoSComponent;
  let fixture: ComponentFixture<TodoSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodosService],
      declarations: [TodoSComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // delete it here and add it in the bottom
  });

  it('should load todos from the server', () => {
    const service = TestBed.get(TodosService);
    // const todosData = [
    //   { name: 'test', completed: true },
    //   { name: 'test', completed: true }
    // ];
    spyOn(service, 'getTodos').and.returnValue(from([[1, 2]]));
    fixture.detectChanges();

    expect(component.todos.length).toBe(2);
  });
});
