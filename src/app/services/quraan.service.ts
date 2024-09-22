import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuraanService {
  baseUrl: string = `https://api.alquran.cloud/v1`;
  quraanEndPoint: string = `/quran/quran-uthmani`;
  surahEndPoint: string = `/surah`;
  constructor(private http: HttpClient) {}
  getQuraan(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.quraanEndPoint}`);
  }
  getSurah(number: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.surahEndPoint}/${number}`);
  }
}
