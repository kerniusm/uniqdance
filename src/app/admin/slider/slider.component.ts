import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../core/slider.service';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

	pictures : any;

	constructor(
  		private _sS:SliderService,
    	private _auth:AuthService,
    	private router: Router
  	) { }

  ngOnInit() {
  	this.pictures = this._sS.getPictures();
  }

  detectFile(event: Event) {
  	const selectedFile = (event.target as HTMLInputElement).files;
  	const files = selectedFile;

  	if(!files || files.length === 0) {
  		console.log('no files found');
  		return;
  	}
    this._sS.uploadPicture(files[0]);
    event.target['value'] = "";
  }

  deletePicture(id, name) {
    this._sS.deleteImage(id, name);
  }

}
