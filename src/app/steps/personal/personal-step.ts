import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, email, form, required, submit } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationStore } from '../../store/navigation.store';
import { WizardStore } from '../../store/wizard.store';

interface PersonalFormModel {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

@Component({
  selector: 'app-personal-step',
  imports: [TranslatePipe, FormField, FormRoot],
  templateUrl: './personal-step.html',
})
export class PersonalStep {
  private wizardStore = inject(WizardStore);
  protected navigationStore = inject(NavigationStore);

  protected formModel = signal<PersonalFormModel>({
    firstName: this.wizardStore.firstName() || '',
    lastName: this.wizardStore.lastName() || '',
    birthDate: this.wizardStore.birthDate() || '',
    email: this.wizardStore.email() || '',
    phone: this.wizardStore.phone() || '',
    address: this.wizardStore.address() || '',
    city: this.wizardStore.city() || '',
    zipCode: this.wizardStore.zipCode() || '',
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

  protected async onNext(): Promise<void> {
    const ok = await submit(this.personalForm);
    if (ok) {
      this.wizardStore.updatePersonal(this.formModel());
      this.navigationStore.nextStep();
    }
  }

  protected onPrev(): void {
    this.navigationStore.prevStep();
  }
}
