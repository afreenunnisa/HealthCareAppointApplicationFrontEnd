import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnostic-center';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';

@Component({
  selector: 'app-updatecenter',
  templateUrl: './updatecenter.component.html',
  styleUrls: ['./updatecenter.component.css']
})
export class UpdatecenterComponent implements OnInit {
  centers!: DiagnosticCenter;
  id!: number;
  constructor(private centerService:DiagnosticCenterService,private actRouter: ActivatedRoute, private router:Router) { }
  centerForm!:FormGroup;
  ngOnInit(): void {
    this.centers= new DiagnosticCenter();
    this.id=this.actRouter.snapshot.params['diagonasticid'];
    this.centerService.getCenterById(this.id).subscribe(data=>{
      this.centers=data;
    })
  }
  updateDcenter(){
    this.centerService.updateCenter(this.centers).subscribe(res=>{
      this.router.navigate(['diagnosticCenter/all']);
    })
  }

}