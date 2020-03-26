import {Component} from '@angular/core';
import {WebSocketService} from '../_core/web-socket.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  formats = ['Json', 'Raw'];
  data: any;
  format = 'Json';
  private rawData: any;

  constructor(private websocketService: WebSocketService) {
    this.websocketService.response.subscribe(data => {
      this.rawData = data;
      this.data = this.format === 'Json' ? JSON.parse(data) : data;
    });
  }

  setFormat(name: string): void {
    this.format = name;
    this.data = this.format === 'Json' ? JSON.parse(this.rawData) : this.rawData;
  }
}
