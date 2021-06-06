import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-add-diagnostic-test',
  templateUrl: './add-diagnostic-test.component.html',
  styleUrls: ['./add-diagnostic-test.component.css']
})
export class AddDiagnosticTestComponent implements OnInit {

  testForm!: FormGroup;
  errorMessage!: string;
  submitted=false;
   
    constructor(private fb: FormBuilder, private testService: DiagnosticTestService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.testForm = this.fb.group({
        id: ['', Validators.required],
        testname: ['', Validators.required],
        testprice: ['', Validators.required],
        normalvalue: ['', Validators.required],
        units: ['', Validators.required]
  
      })
     
    }
    get id(){
      return this.testForm.get('id');
    }
    get testname(){
      return this.testForm.get('testname');
    }
    get testprice(){
      return this.testForm.get('testprice');
    }
    get normalvalue(){
      return this.testForm.get('normalvalue');
    }
    get units(){
      return this.testForm.get('units');
    }
    addTest() {
      this.testService.addTests(this.testForm.value).subscribe(res => {
        this.router.navigate(['diagnostictest/all']);
      },
        error => {
          this.errorMessage = error;
  
        }
      )
      this.submitted=true;
    }
  

}

