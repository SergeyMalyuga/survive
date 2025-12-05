import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleLanguageDirective } from './directives/toggle-language.directive';
import { ToggleMainNavDirective } from './directives/toggle-main-nav.directive';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../core/constants/const';
import { SwitchLanguageDirective } from './directives/switch-language.directive';

@Component({
  selector: 'app-header',
  imports: [
    ToggleLanguageDirective,
    ToggleMainNavDirective,
    TranslatePipe,
    SwitchLanguageDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isLanguageMenuOpen = signal<boolean>(false);
  public isMainNavOpen = signal<boolean>(false);
  public currentLanguage = signal<Language>(Language.EN);
  public readonly Language = Language;

  public onLanguageToggled(isOpen: boolean): void {
    this.isLanguageMenuOpen.set(isOpen);
  }

  public onMainNavToggled(): void {
    this.isMainNavOpen.set(!this.isMainNavOpen());
  }

  onLanguageSwitched(language: Language): void {
    this.currentLanguage.set(language);
  }
}
