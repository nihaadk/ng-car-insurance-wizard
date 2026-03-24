export interface CarState {
  make: string;
  model: string;
  year: number | null;
  horsepower: number | null;
  fuelType: string;
  mileage: number | null;
}

export interface CarFormModel {
  make: string;
  model: string;
  year: number;
  horsepower: number;
  fuelType: string;
  mileage: number;
}
