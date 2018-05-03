import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any;
  constructor(
    private _pS: PostService
  ) { }

  ngOnInit() {
    this.posts = this._pS.getAllPostsForUI();
  }

}
