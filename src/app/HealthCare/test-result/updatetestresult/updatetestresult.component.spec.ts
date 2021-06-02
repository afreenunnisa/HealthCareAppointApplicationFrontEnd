import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetestresultComponent } from './updatetestresult.component';

describe('UpdatetestresultComponent', () => {
  let component: UpdatetestresultComponent;
  let fixture: ComponentFixture<UpdatetestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetestresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
