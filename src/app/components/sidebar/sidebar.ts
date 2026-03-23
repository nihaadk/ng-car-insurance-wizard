import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WIZARD_STEPS } from '../../config/wizard.config';
import { NavigationStore } from '../../store/navigation.store';

@Component({
  selector: 'app-sidebar',
  imports: [TranslatePipe],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected navigationStore = inject(NavigationStore);
  protected steps = WIZARD_STEPS;
}
