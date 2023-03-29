import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUserFavoritesComponent } from './list-of-user-favorites.component';

describe('ListOfUserFavoritesComponent', () => {
  let component: ListOfUserFavoritesComponent;
  let fixture: ComponentFixture<ListOfUserFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfUserFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfUserFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
