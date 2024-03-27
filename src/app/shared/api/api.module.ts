import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { audioRecordingsProvider } from './interceptors/audio-recordings-backend';

@NgModule({
  imports: [HttpClientModule],
  providers: [audioRecordingsProvider],
})
export class ApiModule {}
