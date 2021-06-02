import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiagnosticTestComponent } from './add-diagnostic-test.component';

describe('AddDiagnosticTestComponent', () => {
  let component: AddDiagnosticTestComponent;
  let fixture: ComponentFixture<AddDiagnosticTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiagnosticTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiagnosticTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
