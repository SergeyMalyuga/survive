import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';


@Component({
  selector: 'app-swiper',
  templateUrl: 'swiper.component.html',
  styleUrl: 'swiper.component.scss' //обязательно указать width для класса swiper
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  private swiper!: Swiper;

  constructor(private el: ElementRef) {
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  ngAfterViewInit() {

    const swiperElement = this.el.nativeElement.querySelector('.swiper');

    this.swiper = new Swiper(swiperElement, {
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000
      },
    });
  }
}


