import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAppFormComponent } from './u-app-form.component';

describe('UAppFormComponent', () => {
  let component: UAppFormComponent;
  let fixture: ComponentFixture<UAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAppFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
