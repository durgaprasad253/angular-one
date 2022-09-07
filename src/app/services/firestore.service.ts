import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {Item} from '../models/item'
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('projects');
    this.items = this.itemsCollection.valueChanges();
  }

  getData(){
    return this.items;
  }
}
