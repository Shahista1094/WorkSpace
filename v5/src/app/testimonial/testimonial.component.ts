import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 700,
    // nav: true,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
   
  }
}
