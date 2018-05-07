import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class SliderService {
  constructor(private afs: AngularFirestore) {}

  uploadPicture(upload) {
    const storageRef = firebase.storage().ref();
    const imageName = new Date().getTime();

    const uploadTask = storageRef.child(`slider/${imageName}`).put(upload);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        const snap = snapshot;
        upload.progress =
          uploadTask.snapshot.bytesTransferred /
          uploadTask.snapshot.totalBytes *
          100;
      },
      error => {
        console.log(error);
      },
      () => {
        if (uploadTask.snapshot.downloadURL) {
          const newPicture = {
            photoURL: uploadTask.snapshot.downloadURL,
            imageName: imageName
          };
          this.afs.collection('sliderPictures').add(newPicture);
          return;
        } else {
          console.log('File not upload');
        }
      }
    );
    console.log('accomplished');
  }

  getPictures() {
    return this.afs
      .collection('sliderPictures', ref => ref.orderBy('imageName', 'desc'))
      .snapshotChanges()
      .map(result =>
        result.map(resu => {
          const data = resu.payload.doc.data();
          return {
            id: resu.payload.doc.id,
            photoURL: data.photoURL,
            name: data.imageName
          };
        })
      );
  }

  getPicturesForUI() {
    return this.afs
      .collection('sliderPictures', ref => ref.orderBy('imageName', 'desc'))
      .valueChanges();
  }

  deleteImage(id, name) {
    return this.afs
      .doc<any>(`sliderPictures/${id}`)
      .delete()
      .then(() => {
        const storageRef = firebase.storage().ref();
        storageRef.child(`slider/${name}`).delete();
      });
  }
}
