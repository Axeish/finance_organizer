import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.css']
})
export class AddValueComponent implements OnInit {
  firstname='Anandi';
  lastname="kumar";

  constructor() { 
     }

  ngOnInit() {
  }

  btnclick() {
     alert("btn clicked");
  }

}
