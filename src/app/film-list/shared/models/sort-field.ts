export type SortDirection = -1 | 0 | 1;

export interface SortField {
  field: string;
  direction: SortDirection;
}
