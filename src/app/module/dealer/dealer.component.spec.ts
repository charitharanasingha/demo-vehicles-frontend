import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DealerComponent } from './dealer.component';

describe('DealerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DealerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DealerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-vehicles-frontend'`, () => {
    const fixture = TestBed.createComponent(DealerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-vehicles-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DealerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-vehicles-frontend app is running!');
  });
});
