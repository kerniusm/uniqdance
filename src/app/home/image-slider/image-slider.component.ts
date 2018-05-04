import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var Swiper:any;

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor(
    private router: Router
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
  }

}
