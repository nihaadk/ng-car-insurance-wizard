import { signalStore } from '@ngrx/signals';
import { withCarFeature } from './car.store';
import { withCoverageFeature } from './coverage.store';
import { withNavigationFeature } from './navigation.store';
import { withPersonalFeature } from './personal.store';

export const Store = signalStore(
  { providedIn: 'root' },
  withCarFeature(),
  withPersonalFeature(),
  withCoverageFeature(),
  withNavigationFeature(),
);
