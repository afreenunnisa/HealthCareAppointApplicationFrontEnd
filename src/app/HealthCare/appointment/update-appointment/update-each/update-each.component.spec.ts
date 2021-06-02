import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEachComponent } from './update-each.component';

describe('UpdateEachComponent', () => {
  let component: UpdateEachComponent;
  let fixture: ComponentFixture<UpdateEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
