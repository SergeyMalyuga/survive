import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  private document = inject(DOCUMENT);

  public setOverflow(hidden: boolean) {
    this.document.body.classList.toggle('no-scroll', hidden);
  }
}
