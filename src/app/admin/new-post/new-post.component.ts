import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  id: string;
  post: any = {
    title: '',
    text: '',
    photoURL: '',
    slug: ''
  };

  constructor(
    private _pS: PostService,
    private _aR: ActivatedRoute,
    private _authS: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this._aR.snapshot.params['id'];
    if (this.id) {
      this._pS.getOnePost(this.id).valueChanges().subscribe(post => {
        this.post = {
          title: post.title,
          text: post.text,
          photoURL: post.photoURL,
          imageName: post.imageName,
          slug: post.slug
        };
      });
    } else {
      this.createPost();
    }
  }

  createPost() {
    const post = {
      "title": this.post.title,
      "imageURL": this.post.imageURL,
      "text": this.post.text,
      "slug": this.post.slug
    };
    this._pS.createPostPicture(post).then(post => {
      return this.router.navigate(['/admin/post', post.id]);
    });
  }

  updatePost() {
    const post = {
      "title": this.post.title,
      "text": this.post.text,
      "slug": this.createSlug(this.post.title)
    };

    this._pS.updatePost(post, this.id)
    .then(
      user => this.router.navigate(['/admin/posts'])
    );
  }

  deletePost() {
    this._pS.softDeletePost(this.id)
    .then(
      () => this.router.navigate(['/admin/posts'])
    );
  }

  createSlug(title){
    let str = title.replace("-");
    str = str.toLowerCase();
    str = str.replace(/[^A-Z0-9]+/ig, "-");
    return str +'-'+ new Date().getTime();
  }

  detectFile(event: Event) {
    const selectFile = (event.target as HTMLInputElement).files;
    const files = selectFile;

    if (!files || files.length === 0) {
      console.warn('No files found');
      return;
    }
    this._pS.uploadPicture(files[0], this.id);
    event.target['value'] = "";
  }

  deletePhoto(event: any) {
    event.stopPropagation();
    this._pS.deletePhoto(this.id, this.post.imageName);
  }

}
