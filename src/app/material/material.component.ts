import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message:string

  constructor() { }

  ngOnInit(): void {
    this.message = 'please selet button'
  }

  change(v) { 
    this.message = 'select: "' + v + '".'
  }

}
