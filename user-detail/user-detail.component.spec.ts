import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class RouterSub {
  navigate(params) {}
}

class ActivatedRouterStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [
        { provide: Router, useClass: RouterSub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Redirect user when we click save to the users page', () => {
    // arrange
    const router = TestBed.get(Router);
    // act
    const spy = spyOn(router, 'navigate');
    component.save();
    // acert
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should redirect to not found page if the user not found', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    const route: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
