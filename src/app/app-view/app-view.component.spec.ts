import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppViewComponent } from './app-view.component';

describe('AppViewComponent', () => {
  let component: AppViewComponent;
  let fixture: ComponentFixture<AppViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
