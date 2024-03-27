import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

import { TableData } from '@app/shared/interfaces';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AudioRecordingsApiService {
  constructor(private httpClient: HttpClient) {}

  public getAudioRecordings(pagination: PageEvent): Observable<TableData> {
    let params = new HttpParams()
      .set('pageIndex', pagination.pageIndex.toString())
      .set('pageSize', pagination.pageSize.toString());

    return this.httpClient.get<TableData>(
      `${environment.apiUrl}/audio-recordings`,
      {
        params,
      }
    );
  }
}
