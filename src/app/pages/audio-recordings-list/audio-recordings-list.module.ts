import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

import { ApiModule } from '@app/shared/api';
import { PlayerModule } from '@app/shared/components';
import { AudioRecordingsListComponent } from './components/audio-recordings-list.component';
import { AudioRecordingsListService } from './services/audio-recordings-list.service';
import { AudioRecordingsListRoutingModule } from './audio-recordings-list-routing.module';
import { AudioRecordingsListTableComponent } from './components/table/table.component';
import { AudioRecordingsListPaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    AudioRecordingsListRoutingModule,
    ApiModule,
    PlayerModule,
  ],
  exports: [AudioRecordingsListComponent],
  declarations: [
    AudioRecordingsListComponent,
    AudioRecordingsListTableComponent,
    AudioRecordingsListPaginationComponent,
  ],
  providers: [AudioRecordingsListService],
})
export class AudioRecordingsListModule {}
