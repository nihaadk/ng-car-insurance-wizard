import { computed } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export interface Coverage {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  selected: boolean;
  required: boolean;
}

export interface CoverageState {
  coverages: Coverage[];
}

const DEFAULT_COVERAGES: Coverage[] = [
  {
    id: 'liability',
    nameKey: 'coverage.coverages.liability.name',
    descriptionKey: 'coverage.coverages.liability.description',
    price: 29.9,
    selected: true,
    required: true,
  },
  {
    id: 'partial',
    nameKey: 'coverage.coverages.partial.name',
    descriptionKey: 'coverage.coverages.partial.description',
    price: 19.5,
    selected: false,
    required: false,
  },
  {
    id: 'full',
    nameKey: 'coverage.coverages.full.name',
    descriptionKey: 'coverage.coverages.full.description',
    price: 39.9,
    selected: false,
    required: false,
  },
  {
    id: 'roadside',
    nameKey: 'coverage.coverages.roadside.name',
    descriptionKey: 'coverage.coverages.roadside.description',
    price: 8.5,
    selected: false,
    required: false,
  },
  {
    id: 'driverAccident',
    nameKey: 'coverage.coverages.driverAccident.name',
    descriptionKey: 'coverage.coverages.driverAccident.description',
    price: 12.0,
    selected: false,
    required: false,
  },
];

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
