import {EventEmitter, Injectable} from '@angular/core';
import {Config} from '../_core/config/config';
import {HttpClient} from '@angular/common/http';
import {Playground} from './interfaces/playground';
import {ConfigService} from '../_core/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  public playground: Playground;
  public playgroundUpdate: EventEmitter<Playground>;
  private config: Config;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    this.config = this.configService.config;
    this.configService.configUpdate.subscribe(config => {
      this.config = config;
      this.reload();
    });

    this.playground = {apiUrl: undefined, endpointCollections: []};
    this.playgroundUpdate = new EventEmitter<Playground>();
    this.reload();
  }

  public reload(): void {
    if (this.config.playgroundUrl) {
      this.httpClient.get<Playground>(this.config.playgroundUrl).subscribe(
        playground => {
          if (this.playground !== playground) {
            this.playground = playground;
            this.playgroundUpdate.emit(playground);
          }
        },
        error => console.warn(`Can't load playground: ${error.message}`)
      );
    }
  }
}
