import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCenterComponent } from './diagnostic-center.component';

describe('DiagnosticCenterComponent', () => {
  let component: DiagnosticCenterComponent;
  let fixture: ComponentFixture<DiagnosticCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
