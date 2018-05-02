import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class RegistrationsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllRegistrations() {
    return this.afs.collection('registrations', ref => ref.orderBy('posted_on', 'desc')).snapshotChanges()
    .map(result => {
      return result.map(resu => {
        const data = resu.payload.doc.data();
        return {
          //
        };
      });
    });
  }

}
