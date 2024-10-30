import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuraanService } from '../../services/quraan.service';
import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { BookMarkService } from '../../services/book-mark.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkModalComponent } from '../bookmark-modal/bookmark-modal.component';
import { IsurahResponse } from '../../model/isurah-response';
import { Isurah } from '../../model/isurah';
import { Iayah } from '../../model/iayah';
import { map, Observable, switchMap } from 'rxjs';
import { BookMarkDirective } from '../../directives/book-mark.directive';
@Component({
  selector: 'app-surah',
  standalone: true,
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
  imports: [
    NgFor,
    NgIf,
    NgClass,
    MatButtonModule,
    AsyncPipe,
    BookMarkDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurahComponent implements OnInit {
  ayahs: Iayah[] = [];
  surah$: Observable<Isurah> | undefined;
  surahs$!: Observable<Isurah[]>;
  activesurahNumber!: number;
  selectedFont!: string;
  bookMarkInfo!: any;

  // Services
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private quraanService = inject(QuraanService);
  private bookmarkService = inject(BookMarkService);

  ngOnInit() {
    // bookmark subscribe
    this.bookmarkService.getAyahIndexObservable().subscribe((info: any) => {
      this.bookMarkInfo = info;
    });
    // get the surah from the params
    this.surah$ = this.route.params.pipe(
      switchMap((params: any) => {
        this.activesurahNumber = params.number;
        return this.quraanService.getSurah(this.activesurahNumber);
      }),
      map((res: IsurahResponse) => res.data)
    );

    // get all surahs
    this.surahs$ = this.quraanService
      .getSurahs()
      .pipe(map((res: any) => res.data));
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
    if (number < 114) {
      this.router.navigateByUrl(`/surah/${number}`);
    }
  }
  nextSurah() {
    if (this.activesurahNumber < 114) {
      this.activesurahNumber++;
      this.router.navigateByUrl(`/surah/${this.activesurahNumber}`);
    }
  }
  previousSurah() {
    if (this.activesurahNumber > 1) {
      this.activesurahNumber--;
      this.router.navigateByUrl(`/surah/${this.activesurahNumber}`);
    }
  }
}
