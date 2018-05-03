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
    imageURL: '',
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
          imageURL: post.imageURL,
          slug: post.slug
        };
      });
    } else {
      this.createPost();
    }
  }

  createPost() {
    this._authS.user.subscribe(user => {
      this._pS.createPostPicture(user.uid, this.post.title, this.post.imageURL, this.post.text, this.post.slug).then(post => {
        return this.router.navigate(['/posts']);
      });
    });
  }

  updatePost() {
    this._pS.updatePost(this.id, this.post.title, this.post.imageURL, this.post.text, this.post.slug)
    .then(
      user => this.router.navigate(['/posts'])
    );
  }

  createSlug(title){
    let str = title.replace("-");
    str = str.toLowerCase;
    str = str.replace(/[^A-Z0-9]+/ig, "-");
    return str;
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
