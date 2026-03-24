import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '../../store/store';

@Component({
  selector: 'app-coverage-step',
  imports: [TranslatePipe],
  templateUrl: './coverage-step.html',
})
export class CoverageStep {
  protected store = inject(Store);

  protected onToggle(id: string): void {
    this.store.toggleCoverage(id);
  }

  protected onNext(): void {
    this.store.nextStep();
  }

  protected onPrev(): void {
    this.store.prevStep();
  }
}
