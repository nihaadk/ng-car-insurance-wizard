import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationStore } from '../../store/navigation.store';
import { WizardStore } from '../../store/wizard.store';

@Component({
  selector: 'app-coverage-step',
  imports: [TranslatePipe],
  templateUrl: './coverage-step.html',
})
export class CoverageStep {
  protected wizardStore = inject(WizardStore);
  protected navigationStore = inject(NavigationStore);

  protected onToggle(id: string): void {
    this.wizardStore.toggleCoverage(id);
  }

  protected onNext(): void {
    this.navigationStore.nextStep();
  }

  protected onPrev(): void {
    this.navigationStore.prevStep();
  }
}
