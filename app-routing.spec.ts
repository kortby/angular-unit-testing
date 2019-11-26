import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';

import { routes } from './app-routing.module';
import { UsersComponent } from './users/users.component';

describe('routes', () => {
  it('Should contain route for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent });
  });
});
