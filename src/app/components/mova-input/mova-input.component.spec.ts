import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovaInputComponent } from './mova-input.component';

describe('MovaInputComponent', () => {
  let component: MovaInputComponent;
  let fixture: ComponentFixture<MovaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
