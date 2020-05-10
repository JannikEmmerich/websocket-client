import {Component} from '@angular/core';
import {ConfigService} from './_core/config/config.service';
import {Config} from './_core/config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config: Config;

  constructor(private configService: ConfigService) {
    this.config = this.configService.config;
    this.configService.configUpdate.subscribe(config => this.config = config);
  }
}
