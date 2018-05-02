import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class PostService {

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) { }

  uploadPicture(upload, id) {
    const storageRef = firebase.storage().ref();
    const imageName = new Date().getTime();
    const uploadTask = storageRef.child(`posts/${imageName}`).put(upload);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
      },
      (error) => {
        console.error(error)
      },
      () => {
        if (uploadTask.snapshot.downloadURL) {
          let newPicture = {
            photoURL: uploadTask.snapshot.downloadURL,
            imageName: imageName
          }
          this.updatePicture(newPicture, id);
          return;
        } else {
          console.log('File not uploaded')
        }
      }
    );
  }

  createPostPicture(uid, header, photoURL, text, slug) {
      const picture = {
        "user_uid": uid,
        'title': header,
        'text': text,
        'photoURL': photoURL,
        'slug': slug,
        'status': 'draft',
        "created_at": new Date().getTime(),
        "updated_at": new Date().getTime()
      };
      return this.afs.collection('posts').add(picture);
  }

  deletePhoto(id: string, pictureName: string) {
    this.getOnePost(id).update({
      "photoURL": "",
      "imageName": ""
    }).then(
      () => {
        const storageRef = firebase.storage().ref();
        storageRef.child(`posts/${pictureName}`).delete();
      }
    );
  }

  private updatePicture(upload, id) {
    this.getOnePost(id).update(upload);
  }

  addPost(header, photoURL, text, slug) {
    const post = {
      'posted_on': new Date().getTime(),
      'title': header,
      'text': text,
      'photoURL': photoURL,
      'slug': slug,
      'status': 'draft'
    };
    return this.afs.collection('posts').add(post);
  }

  getOnePost(id) {
    return this.afs.doc<any>(`posts/${id}`);
  }

  updatePost(id, header, text, photoURL, slug) {
    return this.getOnePost(id).update({
      'title': header,
      'text': photoURL,
      'photoURL': text,
      'slug': slug,
    });
  }

  sharePost(id) {
      return this.getOnePost(id).update({"status": "active"});
  }

  getAllPosts() {
    return this.afs.collection('posts', ref => ref.orderBy('created_at', 'desc')).snapshotChanges()
    .map(result => {
      return result.map(resu => {
        const data = resu.payload.doc.data();
        return {
          id: resu.payload.doc.id,
          title: data.title,
          text: data.text,
          photoURL: data.photoURL,
          slug: data.slug,
          status: data.status
        };
      });
    });
  }

}
