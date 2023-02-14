import { Injectable, Input } from '@angular/core';
import { collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Entry } from '../interface/entry.data';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  entryData: Entry[] = [];
  studentRef!: AngularFireObject<any>;

  @Input() textValue!: string;
  
  constructor(private fireStore: Firestore, private db: AngularFireDatabase) {}

  addEntry(entry: Entry) {
    let $productsRef = collection(this.fireStore, 'entries')
    return addDoc($productsRef, entry)
  }

  getEntries() {
    let $productsRef = collection(this.fireStore, 'entries')
    return collectionData($productsRef, {idField: 'id'}) as Observable<Entry[]>;
  }

  getEntry(id: number) {
    let $productsRef = doc(this.fireStore, 'entries/' + id)       
    return docData($productsRef) as Observable<Entry>;
    // this.studentRef = this.db.object('students-list/' + id);
    // return this.studentRef;
    // let $productsRef;
    // return 
  }

  removeEntry(id?: number) {
    let $productsRef = doc(this.fireStore, 'entries/' + id)
    return deleteDoc($productsRef)
  }

}
