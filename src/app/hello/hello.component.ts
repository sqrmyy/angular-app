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
    this.message = 'FormControlを使う'
    this.myControl = this.fb.group({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      age: new FormControl(0, [Validators.min(1), Validators.max(150)]),
    })
  }

  get name() { return this.myControl.get('name') }
  get mail() { return this.myControl.get('mail') }
  get age() { return this.myControl.get('age')}

  onSubmit() {
    if (this.myControl.invalid) {
      this.message = 'VALIDATION ERROR'
    } else { 
      let result = this.myControl.value
      this.message = JSON.stringify(result)
    }
  }
}
