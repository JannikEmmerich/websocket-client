import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WebSocketService} from '../_core/web-socket.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  history: FormControl;
  data: any;

  constructor(private websocketService: WebSocketService) {
    this.history = new FormControl({value: '', disabled: true});
    this.websocketService.response.subscribe(data => this.data = JSON.parse(data));
  }
}
