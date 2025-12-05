import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabRequestToggleDirective } from './directives/tab-request-toggle.directive';
import { DetailsTabIds } from '../../core/constants/const';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  imports: [TabRequestToggleDirective, TranslatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  public activeTab = signal<string>('details-tab-1');

  public onTabToggleRequested(tabId: string): void {
    this.activeTab.set(tabId);
  }

  protected readonly DetailsTabIds = DetailsTabIds;
}
