import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatingComponent } from './add-dating.component';

describe('AddDatingComponent', () => {
  let component: AddDatingComponent;
  let fixture: ComponentFixture<AddDatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
