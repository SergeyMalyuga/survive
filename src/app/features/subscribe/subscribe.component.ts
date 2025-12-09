import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-subscribe',
  imports: [TranslatePipe],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeComponent {}
