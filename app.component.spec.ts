import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should have a router outlet', () => {
    fixture = TestBed.createComponent(AppComponent);
    const routeroutlet = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routeroutlet).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    console.log(debugElements);

    const index = debugElements.findIndex(
      de => de.properties.href === '/todos'
    );
    expect(index).toBeGreaterThan(-1);
  });
});
