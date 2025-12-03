import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ToggleLanguageDirective} from './directives/toggle-language.directive';
import {ToggleMainNavDirective} from './directives/toggle-main-nav.directive';

@Component({
  selector: 'app-header',
  imports: [ToggleLanguageDirective, ToggleMainNavDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isLanguageMenuOpen = signal<boolean>(false);
  public isMainNavOpen = signal<boolean>(false);

  public onLanguageToggled(isOpen: boolean): void {
    this.isLanguageMenuOpen.set(isOpen);
  }

  public onMainNavToggled(): void {
    this.isMainNavOpen.set(!this.isMainNavOpen());
  }
}
