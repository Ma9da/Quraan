import { Component, inject } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-quraan-list',
  standalone: true,
  imports: [HttpClientModule, NgFor, MatPaginatorModule, RouterLink, NgIf],
  providers: [QuraanService],
  templateUrl: './quraan-list.component.html',
  styleUrl: './quraan-list.component.css',
})
export class QuraanListComponent {
  fullQuraan: Array<any> = [];
  quraanService = inject(QuraanService);
  router = inject(Router);
  ngOnInit() {
    this.quraanService.getQuraan().subscribe((data: any) => {
      this.fullQuraan = data.data.surahs;
    });
  }
  gotoItems(surah: any) {
    const surahNumber = surah ? surah.number : null;
    this.router.navigate(['/quran', surahNumber]);
  }
}
