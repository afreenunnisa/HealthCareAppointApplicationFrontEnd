import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopage',
  templateUrl: './nopage.component.html',
  styleUrls: ['./nopage.component.css']
})
export class NopageComponent implements OnInit {

  constructor(private routes: Router) {}

  ngOnInit(): void {}

  navtoHome() {
    this.routes.navigate(['home']);
  }
}