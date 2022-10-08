import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFailureComponent } from './alert-failure.component';

describe('AlertFailureComponent', () => {
  let component: AlertFailureComponent;
  let fixture: ComponentFixture<AlertFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
