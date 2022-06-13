import {NgModule} from '@angular/core';

import {LocalStorageService} from '@shared/local-storage/local-storage.service';


@NgModule({
  providers: [
    LocalStorageService,
  ],
})
export class LocalStorageModule {
}
