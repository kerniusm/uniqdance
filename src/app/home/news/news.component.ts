import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts: any;
  constructor(
    private _pS: PostService
  ) { }

  ngOnInit() {
    this.posts = this._pS.getAllPostsForUI();
  }

}
