import { Component, OnInit, ViewChild } from '@angular/core';

import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private service:MycheckService) { 
  }

  ngOnInit() {
    this.title = 'Hello-app'
    this.message = this.service.hello()
  }
}