import {Component, Input, OnInit} from '@angular/core';
import {Endpoint} from '../interfaces/endpoint';
import {ParameterData} from '../interfaces/parameter-data';
import {WebSocketService} from '../../_core/web-socket/web-socket.service';
import {NotificationService} from '../../_core/notifications/notification.service';
import {EndpointCollection} from '../interfaces/endpoint-collection';
import {collapse} from '../../_core/_animations';
import {Response} from '../interfaces/response';

@Component({
  selector: 'app-playground-endpoint',
  templateUrl: './playground-endpoint.component.html',
  styleUrls: ['./playground-endpoint.component.scss'],
  animations: [collapse]
})
export class PlaygroundEndpointComponent implements OnInit {

  copyHover = false;
  expanded = false;
  data: any = {};
  response: Response = undefined;
  @Input()
  endpointCollection: EndpointCollection;
  @Input()
  endpoint: Endpoint;
  private endpointName: string;

  constructor(
    private webSocketService: WebSocketService,
    private notificationService: NotificationService) {
    this.webSocketService.response.subscribe(data => {
      const json: Response = JSON.parse(data);
      if (json.tag === this.endpointName) {
        this.response = json;
      }
    });
  }

  ngOnInit(): void {
    this.endpointName = `${this.endpointCollection.name}/${this.endpoint.name}`;
  }

  execute(): void {
    let valid = true;
    const data: any = {};
    Object.entries<ParameterData>(this.data).forEach(([key, value]) => {
      if (!value.valid) {
        valid = false;
      }
      data[key] = value.value;
    });
    if (valid) {
      this.webSocketService.send(JSON.stringify({
        tag: this.endpointName, endpoint: this.endpointName, data
      }));
    } else {
      this.notificationService.sendNotification('Some parameters are not valid.', 'error');
    }
  }

  copyName(): void {
    navigator.clipboard.writeText(this.endpointName).then(
      () => this.notificationService.sendNotification('Copied name.', 'success'),
      error => this.notificationService.sendNotification(`Can't copy name. ${error}`, 'warning')
    );
  }
}
