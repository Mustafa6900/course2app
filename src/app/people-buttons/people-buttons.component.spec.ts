import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleButtonsComponent } from './people-buttons.component';

describe('PeopleButtonsComponent', () => {
  let component: PeopleButtonsComponent;
  let fixture: ComponentFixture<PeopleButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
