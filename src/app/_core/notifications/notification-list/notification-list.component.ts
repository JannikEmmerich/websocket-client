import {Component} from '@angular/core';
import {slideRight} from '../../_animations';
import {NotificationService} from '../notification.service';
import {interval} from 'rxjs';
import {Notification} from '../notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  animations: [slideRight]
})
export class NotificationListComponent {

  notifications: Notification[];

  constructor(
    private notificationService: NotificationService
  ) {
    interval(1000).subscribe(() => this.notifications = this.notificationService.getNotifications());
  }
}
