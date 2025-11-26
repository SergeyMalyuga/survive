import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';
import { SwiperType } from '../../core/constants/const';
import { ScrollRequest } from './directives/scroll-request';

@Component({
  selector: 'app-hero',
  imports: [SwiperComponent, ScrollRequest],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Output() scrolled = new EventEmitter<void>();
  protected readonly SwiperType = SwiperType;

  public onScrolled() {
    this.scrolled.emit();
  }
}
