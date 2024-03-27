import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class PlayerService {
  public readonly audioURL$ = new Subject<string>();

  constructor() {}

  setCurrentAudioURL(audioURL: string): void {
    this.audioURL$.next(audioURL);
  }
}
