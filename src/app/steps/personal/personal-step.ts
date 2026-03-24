import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, email, form, required, submit } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { PersonalFormModel } from '../../models/personal.model';
import { Store } from '../../store/store';

@Component({
  selector: 'app-personal-step',
  imports: [TranslatePipe, FormField, FormRoot],
  templateUrl: './personal-step.html',
})
export class PersonalStep {
  protected store = inject(Store);

  protected formModel = signal<PersonalFormModel>({
    firstName: this.store.firstName() || '',
    lastName: this.store.lastName() || '',
    birthDate: this.store.birthDate() || '',
    email: this.store.email() || '',
    phone: this.store.phone() || '',
    address: this.store.address() || '',
    city: this.store.city() || '',
    zipCode: this.store.zipCode() || '',
  });

  protected personalForm = form(this.formModel, (s) => {
    required(s.firstName);
    required(s.lastName);
    required(s.birthDate);
    required(s.email);
    email(s.email);
    required(s.city);
    required(s.zipCode);
  });

  private savePersonalData(): void {
    this.store.updatePersonal(this.formModel());
  }

  protected async onNext(): Promise<void> {
    const ok = await submit(this.personalForm);
    if (ok) {
      this.savePersonalData();
      this.store.nextStep();
    }
  }

  protected onPrev(): void {
    this.store.prevStep();
  }
}
