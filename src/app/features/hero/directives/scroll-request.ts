import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollRequest]',
})
export class ScrollRequest {
  @Output() scrollRequested = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onScrollBtnClick(event: MouseEvent): void {
    event.preventDefault();
    this.scrollRequested.emit();
  }
}
