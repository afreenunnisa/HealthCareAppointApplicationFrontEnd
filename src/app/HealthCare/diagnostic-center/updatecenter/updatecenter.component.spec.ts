import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecenterComponent } from './updatecenter.component';

describe('UpdatecenterComponent', () => {
  let component: UpdatecenterComponent;
  let fixture: ComponentFixture<UpdatecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
