import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    // to detect the changes
    fixture.detectChanges();

    // this returns the first element who got vote-count class
    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if UpVoted', () => {
    component.myVote = 1;
    // to detect the changes
    fixture.detectChanges();

    // this returns the first element who got vote-count class
    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    const el: HTMLElement = de.nativeElement;

    expect(de.classes.highlighted).toBeTruthy();
  });

  it('should increase total votes when I click upVote button', () => {
    const btn = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    btn.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
