import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormControl

  constructor() { 
  }

  ngOnInit() {
    this.title = 'Hello-app'
    this.message = 'FormControlを使う'
    this.myControl = new FormControl('ok.')
  }

  doClick() { 
    this.message = '「' + this.myControl.value + '」と書きましたね。'
  }
}
