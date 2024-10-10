import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookMarkService {
  constructor(private router: Router) {}
  addBookMark(surahNumber: number, ayahIndex: number) {
    localStorage.setItem('surahNumber', surahNumber.toString());
    localStorage.setItem('ayahIndex', ayahIndex.toString());
  }
  navigateToBookMark() {
    let surahNumber = localStorage.getItem('surahNumber');
    let ayahIndex = localStorage.getItem('ayahIndex');
    if (surahNumber && ayahIndex) {
      this.router.navigate([`/surah/${surahNumber}`], { fragment: ayahIndex });
    }
  }
}
