import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabRequestToggleDirective } from './directives/tab-request-toggle.directive';
import { DetailsTabIds } from '../../core/constants/const';

@Component({
  selector: 'app-details',
  imports: [TabRequestToggleDirective],
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
