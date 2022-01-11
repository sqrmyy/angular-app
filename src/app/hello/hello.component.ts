import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [MycheckService],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.title = 'Hello-app'
    this.message = 'params: ' +
      JSON.stringify(this.route.snapshot.paramMap)
  }
}