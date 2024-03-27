import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudioRecordingsListComponent } from './components/audio-recordings-list.component';

const routes: Routes = [
  {
    path: '',
    component: AudioRecordingsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRecordingsListRoutingModule {}
