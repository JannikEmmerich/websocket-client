import {EventEmitter, Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {NotificationService} from '../notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public response: Subject<any> = new Subject<any>();
  public status: EventEmitter<boolean> = new EventEmitter<boolean>();
  public address: string;
  private currentStatus: boolean;
  private socket: WebSocket;

  constructor(private notificationService: NotificationService) {
    this.currentStatus = false;
    this.status.subscribe(status => {
      this.currentStatus = status;

      if (this.status) {
        this.notificationService.sendNotification(`Websocket is now connected to ${this.address}.`, 'success');
      } else {
        this.notificationService.sendNotification(`Websocket lost connection to ${this.address}. Websocket is now reconnection.`, 'error');
      }
    });
  }

  public connect(address: string): void {
    if (this.socket !== undefined) {
      this.close();
    }
    this.address = address;
    this.socket = new WebSocket(this.address);
    this.socket.onopen = () => this.status.emit(true);
    this.socket.onclose = () => this.status.emit(false);
    this.socket.onmessage = (data) => this.response.next(data.data);
    this.socket.onerror = ((data) => {
      this.status.emit(false);
      console.error('Error in Websocket at ' + this.address + ':');
      console.error(data);
    });
  }

  public send(content: string): void {
    if (!this.currentStatus) {
      this.connect(this.address);
      this.status.subscribe(connected => {
        if (connected) {
          this.socket.send(content);
        }
      });
    } else {
      if (new URL(this.address).href !== new URL(this.socket.url).href) {
        this.connect(this.address);
        const subscription: Subscription = this.status.subscribe((currentStatus: boolean) => {
          if (currentStatus) {
            this.socket.send(content);
            subscription.unsubscribe();
          }
        });
      } else {
        this.socket.send(content);
      }
    }
  }

  public close(): void {
    if (this.socket) {
      this.socket.close();
      delete this.socket;
      this.socket = undefined;
      this.status.emit(false);
    }
  }
}
