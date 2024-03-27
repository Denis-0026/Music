import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { HeaderComponent } from './header/header.component';
import { AudioRecordingsListModule } from '@app/pages';

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RootRoutingModule,
    AudioRecordingsListModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
