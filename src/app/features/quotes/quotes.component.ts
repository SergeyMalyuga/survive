import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-quotes',
  imports: [TranslatePipe],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesComponent {}
