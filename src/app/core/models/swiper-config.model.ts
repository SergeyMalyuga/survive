import {SwiperOptions} from 'swiper/types';

export interface SwiperConfig {
  autoplay?: boolean;
  effects?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  loop?: boolean;
  options: SwiperOptions;
}
