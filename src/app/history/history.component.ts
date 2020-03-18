import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WebSocketService} from '../_core/web-socket.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  history: FormControl;

  constructor(private websocketService: WebSocketService) {
    this.history = new FormControl('');
    this.websocketService.status.subscribe(data => this.add(data ?
      'Connected to ' + this.websocketService.address :
      'Disconnected from ' + this.websocketService.address, 'info'));
    this.websocketService.request.subscribe(data => this.add(data, 'request'));
    this.websocketService.response.subscribe(data => this.add(data, 'response'));
  }

  private add(content: string, type: 'info' | 'request' | 'response'): void {
    this.history.setValue(this.history.value + content + '\n');
  }
}
