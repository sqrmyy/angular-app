import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message: string
  myControl:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.message = 'please selet button'
    this.myControl = new FormGroup({
      picker1: new FormControl(new Date()),
    })
  }

  click() { 
    this.message = JSON.stringify(this.myControl.value)
  }

}
