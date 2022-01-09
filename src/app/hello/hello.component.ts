import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    this.message = 'FormControlを使う'
    this.myControl = this.fb.group({
      name: [''],
      mail: [''],
      age: ['']
    })
  }

  onSubmit() { 
    let result = this.myControl.value
    this.message = JSON.stringify(result)
  }
}
