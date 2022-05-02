import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PasswordGeneratorModule} from './components/password-generator/password-generator.module';
import {IconModule} from './components/icons/icon.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordGeneratorModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
