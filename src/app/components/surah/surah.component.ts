import { Component, inject, OnInit } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule, NgClass],
  providers: [],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent implements OnInit {
  ayahs: any = [];
  surah: any = {};
  surahs: any = [];
  route = inject(ActivatedRoute);
  router = inject(Router);
  quraanService = inject(QuraanService);
  selectedFont!: string;
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
