import { TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToastComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-app-angular' title`, () => {
    const fixture = TestBed.createComponent(ToastComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ToastComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-app-angular');
  });
});
