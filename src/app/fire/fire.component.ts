import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  message: string = 'wait...'
  item$: Observable<DocumentData>;

  constructor(firestore: Firestore) {
    const c = doc(collection(firestore, 'sampledata'), 'sampledoc');
    this.item$ = docData(c);
  }

  ngOnInit(): void {
    this.item$.subscribe((value) => { 
      this.message = value['message']
    })
  }
}
