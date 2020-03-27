import {Component} from '@angular/core';
import {WebSocketService} from '../_core/web-socket.service';
import {FormControl, Validators} from '@angular/forms';
import {NotificationService} from '../_core/notifications/notification.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  content: FormControl;

  format = 'Json';
  status = false;

  constructor(private websocketService: WebSocketService,
              private notificationService: NotificationService) {
    this.content = new FormControl('', [Validators.required]);
    this.websocketService.status.subscribe(data => this.status = data);
  }

  send(): void {
    if (this.status && this.content.valid) {
      if (this.format === 'Json') {
        try {
          this.content.setValue(JSON.stringify(JSON.parse(this.content.value), null, 2));
        } catch (e) {
          if (e.toString().includes('SyntaxError')) {
            this.notificationService.sendNotification(
              `Error in the Json syntax of the response try the 'raw' format.`, 'error');
          } else {
            console.error(e);
            this.notificationService.sendNotification(
              `Error while trying to load the response. Please have a look into the Browser Console. ` +
              `(Firefox/Chrome: CTRL + SHIFT + J / I)`,
              'error');
          }
          return;
        }
      }
      this.websocketService.send(this.content.value);
    }
  }

  setFormat(name: string): void {
    this.format = name;
  }
}
