import { Coverage } from '../models/coverage.model';

export const FUEL_TYPES = ['petrol', 'diesel', 'electric', 'hybrid'] as const;

export type FuelType = (typeof FUEL_TYPES)[number];

export const DEFAULT_COVERAGES: Coverage[] = [
  {
    id: 'liability',
    nameKey: 'coverage.coverages.liability.name',
    descriptionKey: 'coverage.coverages.liability.description',
    price: 29.9,
    deductible: null,
    selected: true,
    required: true,
  },
  {
    id: 'partial',
    nameKey: 'coverage.coverages.partial.name',
    descriptionKey: 'coverage.coverages.partial.description',
    price: 19.5,
    deductible: 150,
    selected: false,
    required: false,
  },
  {
    id: 'full',
    nameKey: 'coverage.coverages.full.name',
    descriptionKey: 'coverage.coverages.full.description',
    price: 39.9,
    deductible: 300,
    selected: false,
    required: false,
  },
  {
    id: 'roadside',
    nameKey: 'coverage.coverages.roadside.name',
    descriptionKey: 'coverage.coverages.roadside.description',
    price: 8.5,
    deductible: null,
    selected: false,
    required: false,
  },
  {
    id: 'driverAccident',
    nameKey: 'coverage.coverages.driverAccident.name',
    descriptionKey: 'coverage.coverages.driverAccident.description',
    price: 12.0,
    deductible: null,
    selected: false,
    required: false,
  },
];
