import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subject, merge } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';

import { AudioRecordingsApiService } from '@app/shared/api';
import { AudioInfo } from '@app/shared/interfaces';

@Injectable({ providedIn: 'any' })
export class AudioRecordingsListService {
  private readonly defaultPagination: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 5,
    previousPageIndex: 0,
  };

  private readonly pagination$ = new BehaviorSubject<PageEvent | null>(
    this.defaultPagination
  );

  private readonly update$ = new Subject<void>();

  private readonly allPaginatedData$ = merge(
    this.update$,
    this.pagination$
  ).pipe(
    switchMap(() => {
      return this.audioRecordingsApiService
        .getAudioRecordings(this.pagination$.value)
        .pipe(startWith(null));
    }),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  readonly data$: Observable<AudioInfo[] | null> = this.allPaginatedData$.pipe(
    map((res) => res?.data || null)
  );

  readonly length$: Observable<number> = this.allPaginatedData$.pipe(
    map((res) => (res?.length ? res?.length : null))
  );

  readonly meta$: Observable<PageEvent> = this.pagination$;

  constructor(private audioRecordingsApiService: AudioRecordingsApiService) {}

  updatePage(): void {
    this.update$.next();
  }

  setCurrentPagination(pagination: PageEvent): void {
    this.pagination$.next(pagination);
  }
}
