import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { ScrollToStoryDirective } from './directives/scroll-to-story.directive';
import { SwiperComponent } from '../swiper/swiper.component';
import { SwiperType } from '../../core/constants/const';

@Component({
  selector: 'app-story',
  imports: [ScrollToStoryDirective, SwiperComponent],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent {
  private _isStoryScroll!: boolean;
  @Input({ required: true }) set isScroll(value: boolean) {
    this._isStoryScroll = value;
  }

  get isStoryScroll() {
    return this._isStoryScroll;
  }

  protected readonly SwiperType = SwiperType;
}
