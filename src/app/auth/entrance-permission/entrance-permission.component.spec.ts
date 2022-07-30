import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancePermissionComponent } from './entrance-permission.component';

describe('EntrancePermissionComponent', () => {
  let component: EntrancePermissionComponent;
  let fixture: ComponentFixture<EntrancePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrancePermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrancePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
