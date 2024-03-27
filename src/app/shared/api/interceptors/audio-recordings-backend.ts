import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import AudioRecordings from '../../../../assets/mocks/audio-recordings-list.json';
import { AudioInfo, TableData } from '@app/shared/interfaces';

@Injectable()
export class AudioRecordingsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, params } = request;
    let _data = null;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(100))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/audio-recordings') && method === 'GET':
          return getAudioRecordings();
        default:
          return next.handle(request);
      }
    }

    function getAudioRecordings(): Observable<HttpResponse<TableData>> {
      let pageIndex = Number(params.get('pageIndex'));
      let pageSize = Number(params.get('pageSize'));

      _data = AudioRecordings as unknown as Array<AudioInfo>;

      let response =
        pageSize && typeof pageIndex === 'number'
          ? {
              data: _data.slice(
                pageIndex * pageSize,
                (pageIndex + 1) * pageSize
              ),
              length: _data.length,
            }
          : null;
      _data = null;
      return ok(response);
    }

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } }));
    }
  }
}

export let audioRecordingsProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AudioRecordingsInterceptor,
  multi: true,
};
