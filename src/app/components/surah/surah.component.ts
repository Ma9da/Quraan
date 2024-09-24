import { Component, inject } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf, MatIconModule, NgClass],
  providers: [QuraanService],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent {
  ayahs: any = [];
  surah: any = {};
  route = inject(ActivatedRoute);
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
  }
}
