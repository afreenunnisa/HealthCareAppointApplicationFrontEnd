import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnostic-center';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-getallcenters',
  templateUrl: './getallcenters.component.html',
  styleUrls: ['./getallcenters.component.css']
})
export class GetallcentersComponent implements OnInit {
  centers!: any[];
  test!: any[];
  errorMessage!: any;
  searchText: any;
  constructor(
    private centerService: DiagnosticCenterService,
    private router: Router,
    private testService: DiagnosticTestService
  ) {}

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((data) => {
      this.test = data;
    });
    this.getAllCenters();
  }
  getAllCenters() {
    this.centerService.getAllDiagnosticCenters().subscribe((data) => {
      this.centers = data;
      console.log(data);
    });
  }
  removeCenter(id: number) {
    if (confirm("Are you sure you want to Delete?")) {
      this.centerService.deleteCenter(id).subscribe((data: DiagnosticCenter) => {
        this.getAllCenters();
        this.router.navigate(['diagnosticCenter/all']);
      });
    } else {
      this.router.navigate(['diagnosticCenter/all']);
    }
    
  }
}
