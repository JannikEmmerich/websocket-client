import {EventEmitter, Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public request: Subject<any> = new Subject<any>();
  public response: Subject<any> = new Subject<any>();
  public status: EventEmitter<boolean> = new EventEmitter<boolean>();

  public address: string;
  private socket: WebSocketSubject<any>;

  constructor() {
  }

  public connect(address: string): void {
    if (this.socket != null && !this.socket.isStopped) {
      this.close();
    }
    this.address = address;
    this.socket = webSocket({
      url: this.address,
      openObserver: {next: () => this.status.emit(true)},
      closeObserver: {next: () => this.status.emit(false)}
    });
    this.socket.subscribe(data => this.response.next(data));
  }

  public send(content: string): void {
    this.request.next(content);
    this.socket.next(content);
  }

  public close(): void {
    this.socket.complete();
    this.socket = undefined;
  }

  public reconnect(): void {
    this.connect(this.address);
  }
}
