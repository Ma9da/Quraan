import { Component, inject, OnInit } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BookMarkService } from '../../services/book-mark.service';

@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  providers: [],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent implements OnInit {
  ayahs: any = [];
  surah: any = {};
  surahs: any = [];
  selectedFont!: string;
  ayahIndex = parseInt(localStorage.getItem('ayahIndex') || '0', 10);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quraanService = inject(QuraanService);
  private bookmarkService = inject(BookMarkService);
  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      const surahNumber: number = param.number;
      this.quraanService.getSurah(surahNumber).subscribe((surah: any) => {
        this.surah = surah.data;
        this.ayahs = surah.data.ayahs;
      });
    });
    this.quraanService.getSurahs().subscribe((surahs: any) => {
      this.surahs = surahs.data;
    });
  }
  saveBookMark(surah: any, index: number) {
    if (surah) {
      this.bookmarkService.addBookMark(surah, index);
    }
  }
  chooseSurah(number: number) {
    const lastSurah: number = 114;
    if (number < lastSurah) {
      this.router.navigateByUrl(`/surah/${number}`);
    }
  }
  nextSurah(number: number) {
    const lastSurah: number = 114;
    if (number < lastSurah) {
      this.router.navigateByUrl(`/surah/${number + 1}`);
    }
  }
  previousSurah(number: number) {
    const firstSurah: number = 1;
    if (number > firstSurah) {
      this.router.navigateByUrl(`/surah/${number - 1}`);
    }
  }
}
