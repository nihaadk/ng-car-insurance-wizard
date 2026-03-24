import { DOCUMENT } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WIZARD_STEPS } from '../../config/wizard.config';
import { Store } from '../../store/store';

@Component({
  selector: 'app-step-nav',
  imports: [TranslatePipe],
  templateUrl: './step-nav.html',
})
export class StepNav {
  private store = inject(Store);
  private document = inject(DOCUMENT);

  protected isFirst = computed(() => this.store.currentStepIndex() === 0);
  protected isLast = computed(() => this.store.currentStepIndex() === WIZARD_STEPS.length - 1);

  /** Steps that own a form — next must trigger requestSubmit() on that form. */
  private readonly formSteps: Record<number, string> = {
    0: 'car-form',
    1: 'personal-form',
  };

  protected onNext(): void {
    if (this.isLast()) {
      alert('Your quote has been submitted! We will contact you shortly.');
      return;
    }
    const formId = this.formSteps[this.store.currentStepIndex()];
    if (formId) {
      (this.document.getElementById(formId) as HTMLFormElement)?.requestSubmit();
    } else {
      this.store.nextStep();
    }
  }

  protected onPrev(): void {
    this.store.prevStep();
  }
}
