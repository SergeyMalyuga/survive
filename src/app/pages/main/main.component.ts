import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {StoryComponent} from '../../features/story/story.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    StoryComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  public isStoryScroll = signal<boolean>(false);

  public onScrollRequested() {
    this.isStoryScroll.set(true);
    setTimeout(() => {
      this.isStoryScroll.set(false);
    }, 100);
  }
}
