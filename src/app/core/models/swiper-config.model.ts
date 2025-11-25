import {SwiperOptions} from 'swiper/types';

export interface SwiperConfig {
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  loop?: boolean;
  options: SwiperOptions;
}
