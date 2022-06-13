import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {LocalStorageModule} from '@shared/local-storage/local-storage.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PasswordGeneratorModule} from './components/password-generator/password-generator.module';
import {IconModule} from './components/icons/icon.module';
import {TooltipNotifierModule} from './components/tooltip-notifier/tooltip-notifier.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordGeneratorModule,
    IconModule,
    TooltipNotifierModule,
    LocalStorageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
