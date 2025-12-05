import {
  Directive,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { BodyService } from '../../../core/services/body.service';

@Directive({
  selector: '[appToggleMainNav]',
})
export class ToggleMainNavDirective {
  @Input({ required: true }) isMainNavOpen!: boolean;
  @Output() mainNavToggled = new EventEmitter<void>();
  private bodyService = inject(BodyService);

  @HostListener('click')
  handleMainNavBtnClick() {
    this.toggleNavMenu();
  }

  @HostListener('window:keydown.escape', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && this.isMainNavOpen) {
      this.toggleNavMenu();
    }
  }

  private toggleNavMenu() {
    this.mainNavToggled.emit();
    this.bodyService.setOverflow(!this.isMainNavOpen);
  }
}
