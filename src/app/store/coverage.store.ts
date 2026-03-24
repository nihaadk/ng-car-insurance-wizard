import { computed } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';
import { DEFAULT_COVERAGES } from '../config/options.config';
import { Coverage, CoverageState } from '../models/coverage.model';

export type { Coverage, CoverageState };

export function withCoverageFeature() {
  return signalStoreFeature(
    withState<CoverageState>({ coverages: DEFAULT_COVERAGES }),
    withComputed((store) => ({
      selectedCoverages: computed(() => store.coverages().filter((c) => c.selected)),
      totalPrice: computed(() =>
        store
          .coverages()
          .filter((c) => c.selected)
          .reduce((sum, c) => sum + c.price, 0),
      ),
    })),
    withMethods((store) => ({
      toggleCoverage(id: string): void {
        const updated = store.coverages().map((c) =>
          c.id === id && !c.required ? { ...c, selected: !c.selected } : c,
        );
        patchState(store, { coverages: updated });
      },
    })),
  );
}
