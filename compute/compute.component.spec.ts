import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponent } from './compute.component';

describe('ComputeComponent', () => {
  let component: ComputeComponent;
  let fixture: ComponentFixture<ComputeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComputeComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return 0 if number is negative', () => {
    expect(component.computing(-1)).toBe(0);
  });

  it('should return incrimented value if the number is positive', () => {
    expect(component.computing(1)).toBe(2);
  });

  it('should include the name in the title', () => {
    expect(component.greet('Rich')).toContain('Rich');
  });

  it('should return the supported currency', () => {
    expect(component.getCurrencies()).toContain('USD');
    expect(component.getCurrencies()).toContain('AUD');
    expect(component.getCurrencies()).toContain('EUR');
  });

  it('should increment totalVote when vote up', () => {
    component.voteUp();
    expect(component.totalVote).toBe(1);
  });

  it('should decrement totalVote when vote down', () => {
    component.voteDown();
    expect(component.totalVote).toBe(-1);
  });
});
