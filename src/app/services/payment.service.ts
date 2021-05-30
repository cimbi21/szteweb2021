import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, CollectionReference, Query } from '@angular/fire/firestore';
import Payment from '../models/payment.model';
import firebase from "firebase";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private path = 'payments';

  p: AngularFirestoreCollection<Payment>;
  data?: Observable<Payment>;

  constructor(private db: AngularFirestore) {
    this.p = db.collection(this.path);
  }

  getAll(): AngularFirestoreCollection<Payment> {
    return this.p;
  }

  async create(data: Payment): Promise<string> {
    const uid = this.db.createId();
    data.id = uid;
    await this.db.collection(this.path).doc(uid).set({...data});
    return uid;
  }

  async update(id: string, data: any): Promise<string> {
    await this.db.collection(this.path).doc(id).update({...data});
    return id;
  }

  async delete(id: string | any): Promise<any> {
    await this.db.collection(this.path).doc(id).delete();
    return id;
  }

  get(): Observable<Payment[]> {
    return this.db.collection(this.path, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy("totalAmount", "desc").limit(1);
      return query;
    }).valueChanges() as Observable<Payment[]>;
  }

  getSmallest(): Observable<Payment[]> {
    return this.db.collection(this.path, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy("totalAmount", "asc").limit(1);
      return query;
    }).valueChanges() as Observable<Payment[]>;
  }
}
