export interface Coverage {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  deductible: number | null;
  selected: boolean;
  required: boolean;
}

export interface CoverageState {
  coverages: Coverage[];
}
