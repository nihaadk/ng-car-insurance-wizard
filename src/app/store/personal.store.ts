import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { PersonalState } from '../models/personal.model';

export type { PersonalState };

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
