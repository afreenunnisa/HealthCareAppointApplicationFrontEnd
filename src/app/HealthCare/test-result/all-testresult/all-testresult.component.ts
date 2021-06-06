import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestResult } from 'src/app/Model/test-result';
import { TestResultService } from 'src/app/Services/test-result.service';

@Component({
  selector: 'app-all-testresult',
  templateUrl: './all-testresult.component.html',
  styleUrls: ['./all-testresult.component.css']
})
export class AllTestresultComponent implements OnInit {

  testres: any[];
  
  constructor(private eService: TestResultService,private router:Router) { }

  ngOnInit(): void {
    this.eService.getAllTestResult().subscribe((data) => {
      this.testres = data;
    });
    this.getallresult();
  }
  getallresult( ){
    this.eService.getAllTestResult().subscribe((data) => {
      this.testres = data;
    });

  }
  removeTestResult(id: number) {
    this.eService.deleteTestResult(id).subscribe((data: TestResult[]) => {
      this.testres = data;
      console.log(data);
      this.router.navigate(['testresult/all']);
    })

  }
}