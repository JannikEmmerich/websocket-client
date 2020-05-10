import {Component} from '@angular/core';
import {ConfigService} from '../_core/config/config.service';
import {Config} from '../_core/config/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  config: Config;

  constructor(private configService: ConfigService) {
    this.config = this.configService.config;
    this.configService.configUpdate.subscribe(config => this.config = config);
  }
}
