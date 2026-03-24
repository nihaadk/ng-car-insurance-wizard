import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WIZARD_STEPS } from '../../config/wizard.config';
import { Store } from '../../store/store';

@Component({
  selector: 'app-sidebar',
  imports: [TranslatePipe],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected store = inject(Store);
  protected steps = WIZARD_STEPS;
}
