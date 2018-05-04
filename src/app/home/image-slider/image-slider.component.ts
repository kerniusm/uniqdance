import { Component, OnInit } from '@angular/core';

declare var Swiper:any;

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
