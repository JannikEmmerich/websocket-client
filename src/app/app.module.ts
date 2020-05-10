import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditorComponent} from './editor/editor.component';
import {ConfigComponent} from './config/config.component';
import {ResponseComponent} from './response/response.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlaygroundModule} from './playground/playground.module';
import {CoreModule} from './_core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ConfigComponent,
    ResponseComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PlaygroundModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
