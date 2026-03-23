import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, form, max, min, required, submit } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationStore } from '../../store/navigation.store';
import { WizardStore } from '../../store/wizard.store';

interface CarFormModel {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  fuelType: string;
  mileage: number;
}

@Component({
  selector: 'app-car-step',
  imports: [TranslatePipe, FormField, FormRoot],
  templateUrl: './car-step.html',
})
export class CarStep {
  private wizardStore = inject(WizardStore);
  protected navigationStore = inject(NavigationStore);

  protected readonly fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'] as const;

  protected formModel = signal<CarFormModel>({
    make: this.wizardStore.make() || '',
    model: this.wizardStore.model() || '',
    year: this.wizardStore.year() ?? 0,
    licensePlate: this.wizardStore.licensePlate() || '',
    fuelType: this.wizardStore.fuelType() || '',
    mileage: this.wizardStore.mileage() ?? 0,
  });

  protected carForm = form(this.formModel, (s) => {
    required(s.make);
    required(s.model);
    required(s.fuelType);
    min(s.year, 1980);
    max(s.year, new Date().getFullYear());
  });

  protected async onNext(): Promise<void> {
    const ok = await submit(this.carForm);
    if (ok) {
      const { make, model, year, licensePlate, fuelType, mileage } = this.formModel();
      this.wizardStore.updateCar({
        make,
        model,
        year: year || null,
        licensePlate,
        fuelType,
        mileage: mileage || null,
      });
      this.navigationStore.nextStep();
    }
  }
}
