import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';
import {SwiperType} from '../../core/constants/const';

@Component({
  selector: 'app-hero',
  imports: [
    SwiperComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  protected readonly SwiperType = SwiperType;
}
