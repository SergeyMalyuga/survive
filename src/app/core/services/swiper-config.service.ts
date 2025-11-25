import {Injectable} from '@angular/core';
import {SwiperConfig} from '../models/swiper-config.model';
import {SwiperType} from '../constants/const';
import {SwiperOptions} from 'swiper/types';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class SwiperConfigService {
  private preset = {
    [SwiperType.HERO]: {
      autoplay: true,
      options: {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000
        },
        speed: 1000
      } as SwiperOptions
    },
    [SwiperType.STORY]: {
      effects: true,
      navigation: true,
      pagination: true,
      options: {
        slidesPerView: 1,
        effect: 'cards',
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 0,
        speed: 600,
      } as SwiperOptions
    }
  }

  public getConfig(type: SwiperType): SwiperConfig {
    return {...this.preset[type]}
  }
}
