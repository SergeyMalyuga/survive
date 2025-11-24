import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appToggleLanguage]'
})

export class ToggleLanguageDirective {
  @Output() languageToggled = new EventEmitter<boolean>();

  @HostListener('mouseenter')
  onLanguageMouseEnter() {
    this.languageToggled.emit(true);
  }

  @HostListener('mouseleave')
  onLanguageMouseLeave() {
    this.languageToggled.emit(false);
  }
}

