import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticTest } from 'src/app/Model/diagnostic-test';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  DiagnosticTest!: DiagnosticTest;
  id!: number;
  constructor(
    private testService: DiagnosticTestService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) {}
  testForm!: FormGroup;
  ngOnInit(): void {
    this.DiagnosticTest = new DiagnosticTest();
    this.id = this.actRouter.snapshot.params['id'];
    this.testService
      .getTestById(this.id)
      .subscribe((data: any) => {
        this.DiagnosticTest = data;
      });
  }
  get testname() {
    return this.testForm.get('testname');
  }
  get testprice() {
    return this.testForm.get('testprice');
  }
  get normalvalue() {
    return this.testForm.get('normalvalue');
  }
  get units() {
    return this.testForm.get('units');
  }
  updateDtest() {
    this.testService.updateTests(this.DiagnosticTest).subscribe((res) => {
      this.router.navigate(['/diagnostictest/all/']);
    });
  }
}