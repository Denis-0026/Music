import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AudioRecordingsListService } from '../services/audio-recordings-list.service';
import { PageEvent } from '@angular/material/paginator';
import { AudioInfo } from '@app/shared/interfaces';

@Component({
  selector: 'app-audio-recordings-list',
  templateUrl: 'audio-recordings-list.component.html',
  styleUrls: ['./audio-recordings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioRecordingsListComponent {
  public audioRecordingsList$: Observable<AudioInfo[]> =
    this.audioRecordingsListService.data$;

  public audioRecordingsListLength$: Observable<number> =
    this.audioRecordingsListService.length$;

  public meta$: Observable<PageEvent> = this.audioRecordingsListService.meta$;

  constructor(private audioRecordingsListService: AudioRecordingsListService) {}

  changePagination(pagination: PageEvent): void {
    this.audioRecordingsListService.setCurrentPagination(pagination);
  }
}
