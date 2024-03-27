import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';
import { PlayerService } from '@app/shared/components';

@Component({
  selector: 'app-audio-recordings-list-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioRecordingsListPaginationComponent {
  @Input() length$: Observable<number> = undefined;
  @Input() meta$: Observable<PageEvent> = undefined;

  @Output() readonly curentPagination = new EventEmitter<PageEvent>();

  constructor(private playerService: PlayerService) {}

  changePagination(pageData: PageEvent): void {
    this.curentPagination.next(pageData);
    this.playerService.setCurrentAudioURL(null);
  }
}
