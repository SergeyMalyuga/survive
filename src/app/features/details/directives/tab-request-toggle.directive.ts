import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appTabRequestToggle]',
})
export class TabRequestToggleDirective {
  @Output() tabToggleRequested = new EventEmitter<string>();
  private elementRef = inject(ElementRef);

  @HostListener('click')
  onToggleBtnClick() {
    const target = this.elementRef.nativeElement as HTMLElement;
    const tabId = target.getAttribute('aria-controls');
    if (tabId) {
      this.tabToggleRequested.emit(tabId);
    }
  }
}
