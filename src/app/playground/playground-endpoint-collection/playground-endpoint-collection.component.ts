import {Component, Input} from '@angular/core';
import {EndpointCollection} from '../interfaces/endpoint-collection';
import {collapse} from '../../_core/_animations';

@Component({
  selector: 'app-playground-endpoint-collection',
  templateUrl: './playground-endpoint-collection.component.html',
  styleUrls: ['./playground-endpoint-collection.component.scss'],
  animations: [collapse]
})
export class PlaygroundEndpointCollectionComponent {

  @Input()
  endpointCollection: EndpointCollection;
  expanded = false;
}
