import {Injectable} from '@angular/core';
import {Notification} from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[];

  constructor() {
    this.notifications = [];
  }

  public sendNotification(text: string, type: 'info' | 'success' | 'warning' | 'error') {
    this.notifications.push({text, type, time: 11});
  }

  public getNotifications(): Notification[] {
    this.notifications = this.notifications.filter(notification => {
      notification.time--;
      return notification.time !== 0;
    });
    return this.notifications;
  }
}
