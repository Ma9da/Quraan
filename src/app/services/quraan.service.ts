import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuraanService {
  baseUrl: string = `https://api.alquran.cloud/v1`;
  surahEndPoint: string = `/surah`;
  tafsirEndPoint: string = `/edition/type/tafsir`;
  recietersEndPoing: string = `/edition/format/audio`;
  audioEndPoint: string = `/ar.alafasy`;

  constructor(private http: HttpClient) {}
  // get all surahs
  getSurahs(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.surahEndPoint}`);
  }
  // get each surah
  getSurah(number: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.surahEndPoint}/${number}`);
  }
  // get all tafsirs
  // to get specific tafsit => `surah/${number}/editions/${tafsirname}`
  getTafsirs(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.tafsirEndPoint}`);
  }
  // get all recienters avalible names
  getSurahsRecieters(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.recietersEndPoing}`);
  }
}
