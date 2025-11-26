import {Directive, ElementRef, inject, Input, OnChanges, SimpleChanges,} from '@angular/core';

@Directive({
  selector: '[appScrollToStory]',
})
export class ScrollToStoryDirective implements OnChanges {
  @Input({ required: true }) isScroll!: boolean;
  private isScrolling = false;
  private elementRef = inject(ElementRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isScroll'] && this.isScroll && !this.isScrolling) {
      this.isScrolling = true;
      setTimeout(() => {
        this.scrollToSection();
        setTimeout(() => {
          this.isScrolling = false;
        }, 1000);
      }, 100);
    }
  }

  private scrollToSection() {
    const target = this.elementRef.nativeElement as HTMLElement;
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
