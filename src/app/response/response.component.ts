import {Component} from '@angular/core';
import {WebSocketService} from '../_core/web-socket.service';
import {NotificationService} from '../_core/notifications/notification.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  data: any;
  format = 'Json';
  private rawData: string;

  constructor(private websocketService: WebSocketService,
              private notificationService: NotificationService) {
    this.websocketService.response.subscribe(data => {
      this.rawData = data;
      this.parse(this.rawData);
    });
  }

  setFormat(name: string): void {
    this.format = name;
    if (this.format === 'Json' && this.rawData) {
      this.parse(this.rawData);
    } else {
      this.data = this.rawData;
    }
  }

  private parse(data: string): void {
    try {
      this.data = this.format === 'Json' ? JSON.parse(data) : data;
      return;
    } catch (e) {
      if (e.toString().includes('SyntaxError')) {
        this.notificationService.sendNotification(
          `Error in the Json syntax of the response try the 'raw' format.`, 'error');
      } else {
        console.error(e);
        this.notificationService.sendNotification(
          `Error while trying to load the response. Please have a look into the Browser Console. (Firefox/Chrome: CTRL + SHIFT + J / I)`,
          'error');
      }
    }
  }
}
