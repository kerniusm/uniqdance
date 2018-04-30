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

  addPost(header, photoURL, text) {
    const post = {
      'posted_on': new Date().getTime(),
      'post_header': header,
      'post_text': text,
      'photoURL': photoURL,
      'status': 'visible'
    };
    return this.afs.collection('posts').add(post);
  }

  getOnePost(id) {
    return this.afs.doc<any>(`posts/${id}`);
  }

  updatePost(id, header, text, photoURL) {
    return this.getOnePost(id).update({
      'post_header': header,
      'post_text': photoURL,
      'photoURL': text
    });
  }

  getAllPosts() {
    return this.afs.collection('posts', ref => ref.orderBy('posted_on', 'desc')).snapshotChanges()
    .map(result => {
      return result.map(resu => {
        const data = resu.payload.doc.data();
        return {
          id: resu.payload.doc.id,
          postHeader: data.post_header,
          postText: data.post_text,
          photoURL: data.photoURL,
          status: data.status
        };
      });
    });
  }

}
