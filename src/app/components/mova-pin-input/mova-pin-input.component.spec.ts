import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovaPinInputComponent } from './mova-pin-input.component';

describe('MovaPinInputComponent', () => {
  let component: MovaPinInputComponent;
  let fixture: ComponentFixture<MovaPinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovaPinInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovaPinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
