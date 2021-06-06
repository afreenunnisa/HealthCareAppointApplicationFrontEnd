import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {

  centerForm!: FormGroup;
  errorMessage!: string;

  constructor(private centerService: DiagnosticCenterService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.centerForm = this.fb.group({
      cname: ['', Validators.required],
      contactno: ['', Validators.required],
      address: ['', Validators.required],
      contactemail: ['', Validators.required],

    })
  }
  get contactemail(){
    return this.centerForm.get('contactemail');
  }
  get contactno(){
    return this.centerForm.get('contactno');
  }
  get address(){
    return this.centerForm.get('address');
  }
  get cname(){
    return this.centerForm.get('cname');
  }
  addCenter() {
    this.centerService.addDiagnosticCenter(this.centerForm.value).subscribe(res => {
      this.router.navigate(['diagnosticCenter/all']);
    }, error => {
      this.errorMessage = error;
    })

  }

}