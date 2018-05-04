import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SliderService } from '../../core/slider.service';

declare var Swiper:any;

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  pictures: any;
  constructor(
    private router: Router,
    private _sS: SliderService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          if (event.url.split('/')[1] === '/') {
            this.initSlider();
          }
      }
    });
    
    this.initSlider();
  }

  initSlider() {
    this._sS.getPicturesForUI().subscribe(res => {
      this.pictures = res;
      new Swiper(".swiper-container", {
          // Optional parameters
          loop: true,
          slidesPerView: 3,
          spaceBetween: 3,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
        });
    });
  }

}
