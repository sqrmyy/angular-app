import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() content: string[]

  constructor(private service: MycheckService) { 
    this.content = []
  }

  ngOnInit(): void {
    this.content.push(this.service.hello())
  }

  push(item: string) { 
    this.service.name = item
    this.content.push(this.service.hello())
  }

  pop() { 
    this.content.pop()
  }
}
