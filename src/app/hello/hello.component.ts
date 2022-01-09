import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title: string;
  message: string[];
  lastTarget: any
  lastColor: string

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.title = 'Hello-app'
    this.message = ['First item', 'Second item', 'Third item']
  }

  doClick(event) { 
    if (this.lastTarget != null) { 
      this.lastTarget.style.color = this.lastColor
      this.lastTarget.style.backgroundColor = 'white'
    }
    this.lastTarget = event.target
    this.lastColor = event.target.style.color
    event.target.style.color = 'white'
    event.target.style.backgroundColor = 'red'
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