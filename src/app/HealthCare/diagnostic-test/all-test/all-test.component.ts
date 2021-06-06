import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-all-test',
  templateUrl: './all-test.component.html',
  styleUrls: ['./all-test.component.css']
})
export class AllTestComponent implements OnInit {

  DiagnosticTest!: any[];

  constructor(private testService:DiagnosticTestService, private router:Router) { }

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((data) => {
      this.DiagnosticTest = data;console.log(data);
    });
  }

}
