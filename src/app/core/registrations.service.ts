import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class RegistrationsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  addRegistration(inputName, inputSurname, inputCity, inputAge, inputPhone, inputTime, inputEmail, inputMessage) {
    const registration = {
      'registrated_on': new Date().getTime(),
      'name': inputName,
      'surname': inputSurname,
      'city': inputCity,
      'age': inputAge,
      'phone': inputPhone,
      'time': inputTime,
      'email': inputEmail,
      'message': inputMessage
    };
    return this.afs.collection('registrations').add(registration);
  }

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
