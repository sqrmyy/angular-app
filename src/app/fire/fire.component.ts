import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getAuth, GoogleAuthProvider, signInWithRedirect, Auth } from "firebase/auth";

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  message: string = 'people data.'
  dataList$: Observable<DocumentData>;
  input: string = ''
  data:any

  constructor(
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.access()
  }

  access() { 
    const c = collectionData(collection(this.firestore, 'people'))
      .subscribe((value) => { 
        this.data = value
      },
      error => { 
        this.message = "(can't get data...)"
        this.data = null
      });
  }

  login() { 
    let provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider).then((result) => {
      this.access()
    });
  }

  logout() { 
    const auth = getAuth();
    auth.signOut()
    this.access()
  }

  get currentUser() { 
    const auth = getAuth();
    return auth != null ?
      auth.currentUser != null ?
        auth.currentUser.displayName :
        '(not logined.)' : 
      '(not logined.)'
  }
}
