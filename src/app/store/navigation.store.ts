import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { WIZARD_STEPS } from '../config/wizard.config';
import { NavigationState } from '../models/navigation.model';

export function withNavigationFeature() {
  return signalStoreFeature(
    withState<NavigationState>({ currentStepIndex: 0 }),
    withMethods((store) => {
      const router = inject(Router);
      return {
        syncWithPath(path: string): void {
          const index = WIZARD_STEPS.findIndex((s) => s.path === path);
          if (index !== -1) {
            patchState(store, { currentStepIndex: index });
          }
        },
        goToStep(index: number): void {
          if (index >= 0 && index < WIZARD_STEPS.length) {
            patchState(store, { currentStepIndex: index });
            router.navigate(['/', WIZARD_STEPS[index].path]);
          }
        },
        nextStep(): void {
          const next = store.currentStepIndex() + 1;
          if (next < WIZARD_STEPS.length) {
            patchState(store, { currentStepIndex: next });
            router.navigate(['/', WIZARD_STEPS[next].path]);
          }
        },
        prevStep(): void {
          const prev = store.currentStepIndex() - 1;
          if (prev >= 0) {
            patchState(store, { currentStepIndex: prev });
            router.navigate(['/', WIZARD_STEPS[prev].path]);
          }
        },
      };
    }),
  );
}
