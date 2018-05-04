import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  constructor(
    private _pS: PostService,
    private _aR: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this._aR.snapshot.params['slug']) {
      this._pS.getOnePostBySlug(this._aR.snapshot.params['slug']).subscribe(data => this.post = data[0]);
    } else {
      this.router.navigate(['/naujienos']);
    }
  }


}
