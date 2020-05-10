import {Endpoint} from './endpoint';

export interface EndpointCollection {
  name: string;
  description: string;
  endpoints: Endpoint[];
}
