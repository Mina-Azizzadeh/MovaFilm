import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovaLikeHeartComponent } from './mova-like-heart.component';

describe('MovaLikeHeartComponent', () => {
  let component: MovaLikeHeartComponent;
  let fixture: ComponentFixture<MovaLikeHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovaLikeHeartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovaLikeHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
