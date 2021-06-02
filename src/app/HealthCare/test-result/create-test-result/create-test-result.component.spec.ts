import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestResultComponent } from './create-test-result.component';

describe('CreateTestResultComponent', () => {
  let component: CreateTestResultComponent;
  let fixture: ComponentFixture<CreateTestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
