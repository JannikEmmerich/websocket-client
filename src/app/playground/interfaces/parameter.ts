export interface Parameter {
  name: string;
  type: 'string' | 'number' | 'boolean';
  optional: boolean;
  description: string;
}
