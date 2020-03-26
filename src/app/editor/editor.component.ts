import {Component} from '@angular/core';
import {WebSocketService} from '../_core/web-socket.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  content: FormControl;
  contentType: FormControl;

  formats = ['Json', 'Raw'];
  format = 'Json';
  status = false;

  constructor(private websocketService: WebSocketService) {
    this.content = new FormControl('', [Validators.required]);
    this.contentType = new FormControl(this.format, [Validators.required]);
    this.websocketService.status.subscribe(data => this.status = data);
  }

  send(): void {
    if (this.status && this.content.valid) {
      if (this.format === 'Json') {
        this.content.setValue(JSON.stringify(JSON.parse(this.content.value), null, 2));
      }
      this.websocketService.send(this.content.value);
    }
  }

  setFormat(name: string): void {
    this.format = name;
  }
}
