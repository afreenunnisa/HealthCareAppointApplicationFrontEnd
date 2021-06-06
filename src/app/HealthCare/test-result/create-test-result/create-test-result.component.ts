import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestResultService } from 'src/app/Services/test-result.service';

@Component({
  selector: 'app-create-test-result',
  templateUrl: './create-test-result.component.html',
  styleUrls: ['./create-test-result.component.css']
})
export class CreateTestResultComponent implements OnInit {
  testresultForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private eService: TestResultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testresultForm = this.fb.group({
      testname: ['', Validators.required],
      testreading: ['', Validators.required],
      condition: ['', Validators.required],
    });
  }
  get testname() {
    return this.testresultForm.get('testname');
  }
  get testreading() {
    return this.testresultForm.get('testreading');
  }
  get condition() {
    return this.testresultForm.get('condition');
  }

  get id() {
    return this.testresultForm.get('id');
  }
  regTestResult() {
    this.eService.addTestResult(this.testresultForm.value).subscribe(
      (res) => {
        this.router.navigate(['testresult/all']);
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }
}