import { Injectable, Input } from '@angular/core';
import { collection, collectionData, docData, Firestore, setDoc, getDoc } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { from, map, Observable } from 'rxjs';
import { Entry } from '../interface/entry.data';
import { AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

/**
 * Class for connection to database.
 */
export class DataService {
  entryData: Entry[] = [];
  studentRef!: AngularFireObject<any>;

  @Input() textValue!: string;
  
  /**
   * Constructor of DataService class.
   * @param fireStore - Firestore.
   */
  constructor(private fireStore: Firestore) {}

  /**
   * Method for adding to firestore.
   * @param entry - Record.
   * @returns - Entry document.
   */
  addEntry(entry: Entry) {
    let $productsRef = collection(this.fireStore, 'entries')
    return addDoc($productsRef, entry)
  }

  /**
   * Method for geting entries.
   * @returns - Collection data.
   */
  getEntries() {
    let $productsRef = collection(this.fireStore, 'entries')
    return collectionData($productsRef, {idField: 'id'}) as Observable<Entry[]>;
  }

  /**
   * Method for geting entry.
   * @param id - Entry id.
   * @returns - Observable Entry.
   */
  getEntry(id: string) {
    let $productsRef = doc(this.fireStore, 'entries/' + id)       
    return from(getDoc($productsRef)).pipe(map((x) => x.data() as Entry));
  }

  /**
   * Method for updating entry in firestore.
   * @param id - Entry id.
   * @param entry - Record.
   * @returns - Change in firestore.
   */
  updateEntry(id: string, entry: Entry) {
    let $productsRef = doc(this.fireStore, 'entries/' + id)
    return setDoc($productsRef, entry)
  }

  /**
   * Method for removing entry.
   * @param id - Entry id.
   * @returns - Deleting entry from firestore.
   */
  removeEntry(id: string) {
    let $productsRef = doc(this.fireStore, 'entries/' + id)
    return deleteDoc($productsRef)
  }

}
