import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDatingComponent } from './list-of-dating.component';

describe('ListOfDatingComponent', () => {
  let component: ListOfDatingComponent;
  let fixture: ComponentFixture<ListOfDatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
