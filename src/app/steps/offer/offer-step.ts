import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationStore } from '../../store/navigation.store';
import { WizardStore } from '../../store/wizard.store';

@Component({
  selector: 'app-offer-step',
  imports: [TranslatePipe],
  templateUrl: './offer-step.html',
})
export class OfferStep {
  protected wizardStore = inject(WizardStore);
  protected navigationStore = inject(NavigationStore);

  protected onPrev(): void {
    this.navigationStore.prevStep();
  }

  protected onSubmit(): void {
    // In a real app this would call an API
    alert('Your quote has been submitted! We will contact you shortly.');
  }
}
