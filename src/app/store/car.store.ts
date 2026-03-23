import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface CarState {
  make: string;
  model: string;
  year: number | null;
  licensePlate: string;
  fuelType: string;
  mileage: number | null;
}

const initialCarState: CarState = {
  make: '',
  model: '',
  year: null,
  licensePlate: '',
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
