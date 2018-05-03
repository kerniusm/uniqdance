import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  posts: any;
  constructor(
    private _pS: PostService
  ) { }

  ngOnInit() {
    this.posts = this._pS.getAllPosts();
  }

}
