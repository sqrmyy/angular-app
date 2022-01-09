import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.title = 'Hello-app'
    this.message = 'One,Two,Three,Four,Five'
  }
}

function alpha(c: FormControl) { 
  let REGPATTERN = /^[a-zA-Z]+$/;
  if (REGPATTERN.test(c.value)) {
    return null
  } else { 
    return { alpha: {valid: false}}
  }
}

function even(c: FormControl) { 
  return c.value % 2 === 0 ? null : { even: {valid: false}}
}