import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovedComponent } from './disapproved.component';

describe('DisapprovedComponent', () => {
  let component: DisapprovedComponent;
  let fixture: ComponentFixture<DisapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
