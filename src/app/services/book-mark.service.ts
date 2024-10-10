import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookMarkService {
  constructor(private router: Router) {}
  ayahIndexSubject = new BehaviorSubject<any>(this.initialLocalStorage());
  initialLocalStorage(): any {
    if (this.isBrowser()) {
      const bookMarkInfo = localStorage.getItem('bookMarkInfo');
      if (bookMarkInfo) {
        return JSON.parse(bookMarkInfo);
      }
    }
    return null;
  }
  getAyahIndexObservable() {
    return this.ayahIndexSubject.asObservable();
  }
  addBookMark(surahNumber: number, ayahIndex: number) {
    const bookMarkInfo = {
      surahNumber: surahNumber,
      ayahIndex: ayahIndex,
    };
    if (this.isBrowser()) {
      localStorage.setItem('bookMarkInfo', JSON.stringify(bookMarkInfo));
      this.ayahIndexSubject.next(bookMarkInfo);
    }
  }
  getBookMark(): any {
    if (this.isBrowser()) {
      const bookMarkInfo = localStorage.getItem('bookMarkInfo');
      if (bookMarkInfo) {
        const bookMarkInfoParsed = JSON.parse(bookMarkInfo);
        this.ayahIndexSubject.next(bookMarkInfoParsed); // Update observable
        return bookMarkInfoParsed;
      }
    }
    return NaN;
  }
  navigateToBookMark() {
    const surahNumber = this.getBookMark().surahNumber;
    const ayahIndex = this.getBookMark().ayahIndex;
    if (surahNumber && ayahIndex) {
      this.router.navigate([`/surah/${surahNumber}`], { fragment: ayahIndex });
    }
  }
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
