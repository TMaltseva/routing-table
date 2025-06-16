export interface Route {
  destination: string;
  gateway: string;
  interface: string;
}

export type SortableField = keyof Route;

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: SortableField;
  direction: SortDirection;
}

export interface TableColumn {
  key: SortableField;
  label: string;
  sortable: boolean;
  width?: string;
}

export interface IpValidationResult {
  isValid: boolean;
  error?: string;
}
