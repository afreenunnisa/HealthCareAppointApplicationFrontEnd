import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestResult } from 'src/app/Model/test-result';
import { TestResultService } from 'src/app/Services/test-result.service';

@Component({
  selector: 'app-UAppForm',
  templateUrl: './u-app-form.component.html',
  styleUrls: ['./u-app-form.component.css']
})
export class UAppFormComponent implements OnInit {
  testAddForm!: FormGroup;
  testRes!: TestResult;
  @Output('testResultAddEvent')
  testResultAddEvent: EventEmitter<TestResult> = new EventEmitter();
  constructor(
    private formBuild: FormBuilder,
    private testResServ: TestResultService
  ) {}

  ngOnInit() {
    this.testAddForm = this.formBuild.group({
      testreading: ['', Validators.required],
      condition: [null, Validators.required],
      testname: ['', Validators.required],
    });
  }
  get tests() {
    return this.testAddForm.get('testname');
  }
  submit() {
    this.testRes = this.testAddForm.value as TestResult;
    this.testResServ.addTestResult(this.testRes).subscribe(
      (data) => {
        this.testRes = data;
        this.testResultAddEvent.emit(this.testRes);
      },
      (error) => {
        console.log(error);
      }
    );
    this.testAddForm.reset();
  }
}
