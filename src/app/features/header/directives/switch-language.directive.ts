import {Directive, EventEmitter, HostListener, inject, Input, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../../core/constants/const';

@Directive({
  selector: '[appSwitchLanguage]'
})
export class SwitchLanguageDirective {
  @Output() languageSwitched = new EventEmitter<Language>();
  @Input({required: true}) language!: Language;

  private translate = inject(TranslateService);

  @HostListener('click', ['$event'])
  onSwitchBtnClick(evt: MouseEvent) {
    this.translate.use(this.language)
    this.languageSwitched.emit(this.language);
  }
}
