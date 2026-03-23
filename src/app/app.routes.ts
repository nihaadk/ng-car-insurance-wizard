import { Routes } from '@angular/router';
import { WIZARD_STEPS } from './config/wizard.config';

export const routes: Routes = [
  { path: '', redirectTo: WIZARD_STEPS[0].path, pathMatch: 'full' },
  {
    path: WIZARD_STEPS[0].path,
    loadComponent: () => import('./steps/car/car-step').then((m) => m.CarStep),
  },
  {
    path: WIZARD_STEPS[1].path,
    loadComponent: () => import('./steps/personal/personal-step').then((m) => m.PersonalStep),
  },
  {
    path: WIZARD_STEPS[2].path,
    loadComponent: () => import('./steps/coverage/coverage-step').then((m) => m.CoverageStep),
  },
  {
    path: WIZARD_STEPS[3].path,
    loadComponent: () => import('./steps/offer/offer-step').then((m) => m.OfferStep),
  },
];
