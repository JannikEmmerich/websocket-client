import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditorComponent} from './editor/editor.component';
import {ConfigComponent} from './config/config.component';
import {ResponseComponent} from './response/response.component';
import {FormFieldComponent} from './_core/form-field/form-field.component';
import {FormFieldRefDirective} from './_core/form-field/form-field-ref.directive';
import {ButtonComponent} from './_core/button/button.component';
import {IconConnectComponent} from './_core/icons/icon-connect/icon-connect.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {IconSendComponent} from './_core/icons/icon-send/icon-send.component';
import {IconGithubComponent} from './_core/icons/icon-github/icon-github.component';
import {JsonViewComponent} from './_core/json-view/json-view.component';
import {IconArrowRightComponent} from './_core/icons/icon-arrow-right/icon-arrow-right.component';
import {IconArrowDownComponent} from './_core/icons/icon-arrow-down/icon-arrow-down.component';
import {IconCloseComponent} from './_core/icons/icon-close/icon-close.component';
import {DropdownComponent} from './_core/dropdown/dropdown.component';
import {DropdownRefDirective} from './_core/dropdown/dropdown-ref.directive';
import {IconJsonComponent} from './_core/icons/icon-json/icon-json.component';
import {IconRawComponent} from './_core/icons/icon-raw/icon-raw.component';
import {NotificationListComponent} from './_core/notifications/notification-list/notification-list.component';
import {NotificationItemComponent} from './_core/notifications/notification-item/notification-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ConfigComponent,
    ResponseComponent,
    FormFieldComponent,
    FormFieldRefDirective,
    ButtonComponent,
    IconConnectComponent,
    HeaderComponent,
    IconSendComponent,
    IconGithubComponent,
    JsonViewComponent,
    IconArrowRightComponent,
    IconArrowDownComponent,
    IconCloseComponent,
    DropdownComponent,
    DropdownRefDirective,
    IconJsonComponent,
    IconRawComponent,
    NotificationListComponent,
    NotificationItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
