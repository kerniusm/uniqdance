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

  createPostPicture(post) {
      const newPost = {
        'title': post.title,
        'text': post.text,
        'photoURL': post.photoURL,
        'slug': post.slug,
        'status': 'draft',
        "created_at": new Date().getTime(),
        "updated_at": new Date().getTime()
      };
      return this.afs.collection('posts').add(newPost);
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

  softDeletePost(id: string) {
    return this.getOnePost(id).update({"status": "deleted"});
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

  getOnePostBySlug(slug) {
    return this.afs.collection('posts', ref => ref.where('slug', '==', `${slug}`)).valueChanges();
  }

  updatePost(post, id) {
    return this.getOnePost(id).update({
      'title': post.title,
      'text': post.text,
      'slug': post.slug,
      'status': post.status
    });
  }

  sharePost(id) {
      return this.getOnePost(id).update({"status": "active"});
  }

  getAllPosts(status = 'published') {
    return this.afs.collection('posts', ref => ref.where('status', '==', status).orderBy('created_at', 'desc')).snapshotChanges()
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

  getAllPostsForUI() {
    return this.afs.collection('posts', ref => ref.where('status', '==', 'published').orderBy('created_at', 'desc')).snapshotChanges()
    .map(result => {
      return result.map(resu => {
        const data = resu.payload.doc.data();
        return {
          id: resu.payload.doc.id,
          title: data.title,
          text: data.text,
          photoURL: data.photoURL,
          slug: data.slug
        };
      });
    });
  }
}
