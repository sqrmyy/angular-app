import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, doc, docData, setDoc, addDoc, query, where, getDocs } from '@angular/fire/firestore';
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
  data: any
  name: string
  mail: string
  age:number

  constructor(
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.access()
  }

  access() { 
    collectionData(collection(this.firestore, 'people'))
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

  add() { 
    const data = { name: this.name, mail: this.mail, age: this.age }
    addDoc(collection(this.firestore, 'people'), data)
    this.name = ''
    this.mail = ''
    this.age = 0
  }

  async find(val) {
    const q = query(collection(this.firestore, 'people'), where("name", "==", val))
    const querySnapshot = await getDocs(q);
    let myArray = [];
    querySnapshot.forEach((doc) => {
      myArray.push(doc.data());
    });
    this.data = myArray
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
