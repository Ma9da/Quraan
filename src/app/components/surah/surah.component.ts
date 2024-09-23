import { Component, inject } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf],
  providers: [QuraanService],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent {
  ayahs: any = [];
  surah: any = {};
  route = inject(ActivatedRoute);
  quraanService = inject(QuraanService);
  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      const surahNumber: number = param.number;
      this.quraanService.getSurah(surahNumber).subscribe((surah: any) => {
        this.surah = surah.data;
        this.ayahs = surah.data.ayahs;
      });
    });
  }
}
