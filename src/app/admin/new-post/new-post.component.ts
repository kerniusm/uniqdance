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
  isNew: boolean = true;
  post: any = {
    title: '',
    text: '',
    photoURL: '',
    slug: '',
    status: ''
  };

  tinyMCESettings = {
    height: 250,
    plugins: [
    "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
    "searchreplace wordcount codesample visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
    "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
    ],
    toolbar1: "bold italic underline strikethrough |styleselect formatselect fontselect fontsizeselect",
    toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor codesample image media code | insertdatetime preview | forecolor backcolor",
    toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    menubar: false,
    toolbar_items_size: 'small',
    resize:false,
    skin_url: '/assets/tinymce/skins/lightgray',
    baseURL: '/assets/tinymce',
    theme_url: '/assets/tinymce/themes/modern/theme.min.js',
    content_css: [
      '/assets/plugins/codesample/css/prism.css'
    ]
  };

  constructor(
    private _pS: PostService,
    private _aR: ActivatedRoute,
    private _authS: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this._aR.snapshot.params['id'];
    this.isNew = true;
    this._aR.queryParams.subscribe(params => {
        this.isNew = params["new"];
    });

    if (this.id) {
      this._pS.getOnePost(this.id).valueChanges().subscribe(post => {
        this.post = {
          title: post.title,
          text: post.text,
          photoURL: post.photoURL,
          imageName: post.imageName,
          slug: post.slug,
          status: post.status
        };
      });
    } else {
      this.createPost();
    }
  }

  createPost() {
    const post = {
      "title": this.post.title,
      "photoURL": this.post.photoURL,
      "text": this.post.text,
      "slug": this.post.slug
    };
    this._pS.createPostPicture(post).then(post => {
      return this.router.navigate(['/admin/post', post.id], {queryParams: {"new": true}});
    });
  }

  updatePost() {
    const post = {
      "title": this.post.title,
      "text": this.post.text,
      "slug": this.createSlug(this.post.title),
      "status": this.post.status
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
    let combining = /[\u0300-\u036F]/g;
    str = str.toLowerCase();
    str = str.normalize('NFKD').replace(combining, '');
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
    this._pS.uploadPicture(files[0], this.id, this.post);
    event.target['value'] = "";
  }

  deletePhoto(event: any) {
    event.stopPropagation();
    this._pS.deletePhoto(this.id, this.post.imageName);
  }

}
