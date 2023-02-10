import { Injectable, Input } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Entry } from '../interface/entry.data';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  entryData: Entry[] = [];
  @Input() textValue!: string;
  
  constructor(private fireStore: Firestore) {}

  addEntry(entry: Entry) {
    let $productsRef = collection(this.fireStore, 'entries')
    return addDoc($productsRef, entry)
  }

  getEntries() {
    let $productsRef = collection(this.fireStore, 'entries')
    return collectionData($productsRef, {idField: 'id'}) as Observable<Entry[]>;
  }

}
