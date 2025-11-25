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
      } as SwiperOptions
    },
    [SwiperType.STORY]: {
      autoplay: true,
      options: {
        slidesPerView: "auto",
        effect: 'cards',
        spaceBetween: 0,
      } as SwiperOptions
    }
  }

  public getConfig(type: SwiperType): SwiperConfig {
    return {...this.preset[type]}
  }
}
