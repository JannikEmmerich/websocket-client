import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config;
  public configUpdate: EventEmitter<Config>;

  constructor(private httpClient: HttpClient) {
    this.config = {title: undefined, version: undefined, description: undefined, playgroundUrl: undefined, currentPage: 'editor'};
    this.configUpdate = new EventEmitter<Config>();
    this.reload();
  }

  public reload(): void {
    this.httpClient.get<Config>('config.json').subscribe(
      config => {
        this.config = config;
        this.config.currentPage = this.config.playgroundUrl ? 'playground' : 'editor';
        this.configUpdate.emit(config);
      },
      error => console.warn(`Can't load config: ${error.message}`)
    );
  }
}
