import {Parameter} from './parameter';

export interface Endpoint {
  name: string;
  description: string;
  parameters: Parameter[];
}
