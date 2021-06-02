import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestresultComponent } from './all-testresult.component';

describe('AllTestresultComponent', () => {
  let component: AllTestresultComponent;
  let fixture: ComponentFixture<AllTestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTestresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
