import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuraanService } from '../../services/quraan.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BookMarkService } from '../../services/book-mark.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkModalComponent } from '../bookmark-modal/bookmark-modal.component';
@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent implements OnInit {
  ayahs: any = [];
  surah: any = {};
  surahs: any = [];
  ActivesurahNumber!: number;
  selectedFont!: string;
  bookMarkInfo!: any;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private quraanService = inject(QuraanService);
  private bookmarkService = inject(BookMarkService);
  ngOnInit() {
    this.bookmarkService.getAyahIndexObservable().subscribe((info: any) => {
      this.bookMarkInfo = info;
    });
    this.route.params.subscribe((param: any) => {
      this.ActivesurahNumber = param.number;
      this.quraanService
        .getSurah(this.ActivesurahNumber)
        .subscribe((surah: any) => {
          this.surah = surah.data;
          this.ayahs = surah.data.ayahs;
        });
    });
    this.quraanService.getSurahs().subscribe((surahs: any) => {
      this.surahs = surahs.data;
    });
  }
  readonly dialog: any = inject(MatDialog);
  openDialog(ayah: string, surah: number, index: number) {
    this.dialog.open(BookmarkModalComponent, {
      data: { ayah, surah, index },
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
  nextSurah() {
    const lastSurah: number = 114;
    if (this.ActivesurahNumber < lastSurah) {
      this.ActivesurahNumber++;
      this.router.navigateByUrl(`/surah/${this.ActivesurahNumber}`);
    }
  }
  previousSurah() {
    const firstSurah: number = 1;
    if (this.ActivesurahNumber > firstSurah) {
      this.ActivesurahNumber--;
      this.router.navigateByUrl(`/surah/${this.ActivesurahNumber}`);
    }
  }
}
