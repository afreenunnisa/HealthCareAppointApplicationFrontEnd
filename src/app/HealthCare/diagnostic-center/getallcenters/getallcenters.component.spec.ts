import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcentersComponent } from './getallcenters.component';

describe('GetallcentersComponent', () => {
  let component: GetallcentersComponent;
  let fixture: ComponentFixture<GetallcentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallcentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
