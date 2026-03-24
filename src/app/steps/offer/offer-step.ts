import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '../../store/store';

@Component({
  selector: 'app-offer-step',
  imports: [TranslatePipe],
  templateUrl: './offer-step.html',
})
export class OfferStep {
  protected store = inject(Store);

  protected onPrev(): void {
    this.store.prevStep();
  }

  protected onSubmit(): void {
    // In a real app this would call an API
    alert('Your quote has been submitted! We will contact you shortly.');
  }
}
