import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestResult } from 'src/app/Model/test-result';
import { TestResultService } from 'src/app/Services/test-result.service';

@Component({
  selector: 'app-updatetestresult',
  templateUrl: './updatetestresult.component.html',
  styleUrls: ['./updatetestresult.component.css']
})
export class UpdatetestresultComponent implements OnInit {

  id: number;
  test: TestResult;

  constructor(private actRouter: ActivatedRoute, private eService: TestResultService, private router: Router) { }
testresultForm:FormGroup;

  ngOnInit(): void {
    //this.test = new TestResult();
    this.id = this.actRouter.snapshot.params['id'];
    this.eService.getTestResultById(this.id).subscribe(data => {
      this.test = data;
    });
  }


  updateData() {
    this.test.id = this.id;
    this.eService.updateTestResult(this.test).subscribe(res => {
      this.router.navigate(['/testresult/all'])
    });
  }
}
