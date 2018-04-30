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
  post: any;

  postHeader: string;
  postText: string;
  postImgUrl: string;

  constructor(
    private _pS: PostService,
    private _aR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._aR.snapshot.params['id'];
    /* if (this.id) {
      this._pS.getOnePost(this.id).valueChanges().subscribe(post => {
        this.post = post;
      });
    } */
  }

  createPost() {
    console.log(this.postHeader, this.postImgUrl, this.postText);
    this._pS.addPost(this.postHeader, this.postImgUrl, this.postText);
    this.message = 'Post added';
    this.postHeader = '';
    this.postImgUrl = '';
    this.postText = '';
  }

}
