import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {WebSocketService} from '../_core/web-socket.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  url: FormControl;
  status = false;

  constructor(private websocketService: WebSocketService) {
    this.url = new FormControl('', [Validators.required, Validators.pattern('ws[s]?://.{1,}')]);
  }

  ngOnInit(): void {
    this.websocketService.status.subscribe(data => this.status = data);
  }

  connect(): void {
    if (this.url.valid) {
      this.websocketService.connect(this.url.value);
      this.status = undefined;
    }
  }

  disconnect() {
    this.websocketService.close();
  }
}
