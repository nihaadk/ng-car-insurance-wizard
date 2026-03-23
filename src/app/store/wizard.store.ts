import { signalStore } from '@ngrx/signals';
import { withCarFeature } from './car.store';
import { withCoverageFeature } from './coverage.store';
import { withPersonalFeature } from './personal.store';

export const WizardStore = signalStore(
  { providedIn: 'root' },
  withCarFeature(),
  withPersonalFeature(),
  withCoverageFeature(),
);
