import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuraanService {
  baseUrl: string = `http://api.alquran.cloud/v1`;
  quraanEndPoint: string = `/quran/quran-uthmani`;
  surahEndPoint: string = `/surah`;
  constructor(private http: HttpClient) {}
  getQuraan() {
    return this.http.get(`${this.baseUrl}${this.quraanEndPoint}`);
  }
  getSurah(number: number) {
    return this.http.get(`${this.baseUrl}${this.surahEndPoint}/${number}`);
  }
}
