import {EventEmitter, Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {NotificationService} from '../notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public response: Subject<any> = new Subject<any>();
  public status: EventEmitter<boolean> = new EventEmitter<boolean>();
  public url: URL;
  private connected: boolean;
  private socket: WebSocket;

  constructor(
    private notificationService: NotificationService
  ) {
    this.connected = false;
    this.status.subscribe(status => {
      this.connected = status;
      if (this.status) {
        this.notificationService.sendNotification(`Websocket is now connected to ${this.url.href}.`, 'success');
      } else {
        this.notificationService.sendNotification(`Websocket lost connection to ${this.url.href}. Websocket is now trying reconnection.`, 'error');
      }
    });
  }

  public connect(address: string): void {
    const url = new URL(address);
    if (this.socket !== undefined && this.socket.url !== address) {
      this.close();
    }
    this.url = url;
    this.socket = new WebSocket(this.url.href);
    this.socket.onopen = () => this.status.emit(true);
    this.socket.onclose = () => this.status.emit(false);
    this.socket.onmessage = (data) => this.response.next(data.data);
    this.socket.onerror = ((data) => {
      this.status.emit(false);
      console.error('Error in Websocket at ' + this.url + ':');
      console.error(data);
    });
  }

  public send(content: string): void {
    if (!this.connected) {
      this.connect(this.url.href);
      this.status.subscribe(connected => {
        if (connected) {
          this.socket.send(content);
        }
      });
    } else {
      if (this.url.href !== this.socket.url) {
        this.connect(this.url.href);
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

  public isConnected(): boolean {
    return this.connected;
  }
}
