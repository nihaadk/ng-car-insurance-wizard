import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, form, max, min, required, submit } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { FUEL_TYPES } from '../../config/options.config';
import { CarFormModel } from '../../models/car.model';
import { Store } from '../../store/store';

@Component({
  selector: 'app-car-step',
  imports: [TranslatePipe, FormField, FormRoot],
  templateUrl: './car-step.html',
})
export class CarStep {
  protected store = inject(Store);

  protected readonly fuelTypes = FUEL_TYPES;

  protected formModel = signal<CarFormModel>({
    make: this.store.make() || '',
    model: this.store.model() || '',
    year: this.store.year() ?? 0,
    horsepower: this.store.horsepower() ?? 0,
    fuelType: this.store.fuelType() || '',
    mileage: this.store.mileage() ?? 0,
  });

  protected carForm = form(this.formModel, (s) => {
    required(s.make);
    required(s.model);
    required(s.fuelType);
    min(s.year, 1980);
    max(s.year, new Date().getFullYear());
    min(s.horsepower, 1);
  });

  private saveCarData(): void {
    const { make, model, year, horsepower, fuelType, mileage } = this.formModel();
    this.store.updateCar({
      make,
      model,
      year: year || null,
      horsepower: horsepower || null,
      fuelType,
      mileage: mileage || null,
    });
  }

  protected async onNext(): Promise<void> {
    const ok = await submit(this.carForm);
    if (ok) {
      this.saveCarData();
      this.store.nextStep();
    }
  }
}
