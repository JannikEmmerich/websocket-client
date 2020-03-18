import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditorComponent} from './editor/editor.component';
import {ConfigComponent} from './config/config.component';
import {HistoryComponent} from './history/history.component';
import {FormFieldComponent} from './_core/form-field/form-field.component';
import {FormFieldRefDirective} from './_core/form-field/form-field-ref.directive';
import {ButtonComponent} from './_core/button/button.component';
import {IconConnectComponent} from './_core/icons/icon-connect/icon-connect.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {IconSendComponent} from './_core/icons/icon-send/icon-send.component';
import {IconGithubComponent} from './_core/icons/icon-github/icon-github.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ConfigComponent,
    HistoryComponent,
    FormFieldComponent,
    FormFieldRefDirective,
    ButtonComponent,
    IconConnectComponent,
    HeaderComponent,
    IconSendComponent,
    IconGithubComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
