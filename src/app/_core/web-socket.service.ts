import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public response: Subject<any> = new Subject<any>();
  public status: EventEmitter<boolean> = new EventEmitter<boolean>();

  public address: string;
  private socket: WebSocket;

  constructor() {
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
  }

  public send(content: string): void {
    this.socket.send(content);
  }

  public close(): void {
    this.socket.close();
    this.socket = undefined;
  }
}
