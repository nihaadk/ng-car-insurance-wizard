import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface PersonalState {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

const initialPersonalState: PersonalState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
};

export function withPersonalFeature() {
  return signalStoreFeature(
    withState<PersonalState>(initialPersonalState),
    withMethods((store) => ({
      updatePersonal(data: Partial<PersonalState>): void {
        patchState(store, data);
      },
    })),
  );
}
