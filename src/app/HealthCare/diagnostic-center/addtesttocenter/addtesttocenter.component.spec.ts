import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtesttocenterComponent } from './addtesttocenter.component';

describe('AddtesttocenterComponent', () => {
  let component: AddtesttocenterComponent;
  let fixture: ComponentFixture<AddtesttocenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtesttocenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtesttocenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
