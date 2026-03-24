import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { CarState } from '../models/car.model';

export type { CarState };

const initialCarState: CarState = {
  make: '',
  model: '',
  year: null,
  horsepower: null,
  fuelType: '',
  mileage: null,
};

export function withCarFeature() {
  return signalStoreFeature(
    withState<CarState>(initialCarState),
    withMethods((store) => ({
      updateCar(data: Partial<CarState>): void {
        patchState(store, data);
      },
    })),
  );
}
