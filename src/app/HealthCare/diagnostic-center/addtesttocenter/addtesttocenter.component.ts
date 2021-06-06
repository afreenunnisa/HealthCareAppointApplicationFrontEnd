import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-addtesttocenter',
  templateUrl: './addtesttocenter.component.html',
  styleUrls: ['./addtesttocenter.component.css']
})
export class AddtesttocenterComponent implements OnInit {

  test!: any[];
  centertest!: any[];
  id!: number;
  constructor(
    private centerService: DiagnosticCenterService,
    private testService: DiagnosticTestService,
    private actRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id'];
    //this.testid=this.actRouter.snapshot.params['diagonasticTestid'];
    this.testService.getAllTests().subscribe((data) => {
      this.test = data;
    });
  }
 /* addTest(testid: number) {
    console.log(this.centerid, testid);
    this.centerService
      .addTestToCenter(this.centerid, testid)
      .subscribe((data) => {
        this.router.navigate(['diagnosticCenter/testDetails/' + this.centerid]);
      });
  }*/
}