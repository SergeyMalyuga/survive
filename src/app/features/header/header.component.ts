import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ToggleLanguageDirective} from './directives/toggle-language.directive';

@Component({
  selector: 'app-header',
  imports: [ToggleLanguageDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isLanguageMenuOpen = signal<boolean>(false);

  public onLanguageToggled(isOpen: boolean): void {
    this.isLanguageMenuOpen.set(isOpen);
  }
}
