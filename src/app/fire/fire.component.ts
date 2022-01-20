import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  message: string = 'wait...'
  item$: Observable<DocumentData>;
  input: string = ''

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    docData(doc(collection(this.firestore, 'sampledata'), 'sampledoc'))
      .subscribe((value) => { 
      this.message = value['message']
    });
  }

  click() { 
    setDoc(doc(collection(this.firestore, 'sampledata'), 'sampledoc'), { message: this.input })
    this.input = ''
  }
}
