import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '@app/shared/components';
import { AudioInfo } from '@app/shared/interfaces';

@Component({
  selector: 'app-audio-recordings-list-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioRecordingsListTableComponent {
  @Input() data$: Observable<AudioInfo[]> | null | undefined = undefined;

  displayedColumns: string[] = ['id', 'name', 'fileName'];

  public readonly selectedAudioURL$: Observable<string> =
    this.playerService.audioURL$;

  constructor(private playerService: PlayerService) {}

  selectAudio(audioURL: string): void {
    this.playerService.setCurrentAudioURL(audioURL);
  }
}
