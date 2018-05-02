import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  message: string;
  id: string;
  post: any = {
    postHeader: '',
    postText: '',
    postImgUrl: ''
  };

  constructor(
    private _pS: PostService,
    private _aR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._aR.snapshot.params['id'];
    if (this.id) {
      this._pS.getOnePost(this.id).valueChanges().subscribe(post => {
        this.post = {
          postHeader: post.post_header,
          postText: post.post_text,
          postImgUrl: post.photoURL
        };
      });
    }
  }

  createPost() {
    this._pS.addPost(this.post.postHeader, this.post.postImgUrl, this.post.postText);
    this.message = 'Post added';
    this.post.postHeader = '';
    this.post.postImgUrl = '';
    this.post.postText = '';
  }

  updatePost() {
    this._pS.updatePost(this.id, this.post.postHeader, this.post.postImgUrl, this.post.postText);
    this.message = 'Post updated';
  }

}
