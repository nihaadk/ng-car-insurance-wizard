export interface WizardStepConfig {
  id: string;
  path: string;
  labelKey: string;
}

export const WIZARD_STEPS: WizardStepConfig[] = [
  { id: 'car', path: 'car', labelKey: 'wizard.steps.car.title' },
  { id: 'personal', path: 'personal', labelKey: 'wizard.steps.personal.title' },
  { id: 'coverage', path: 'coverage', labelKey: 'wizard.steps.coverage.title' },
  { id: 'offer', path: 'offer', labelKey: 'wizard.steps.offer.title' },
];
