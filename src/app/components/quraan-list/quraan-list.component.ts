import { Component, inject, OnInit } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { NgFor, NgIf } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-quraan-list',
  standalone: true,
  imports: [NgFor, MatPaginatorModule, RouterLink, NgIf],
  providers: [],
  templateUrl: './quraan-list.component.html',
  styleUrl: './quraan-list.component.css',
})
export class QuraanListComponent implements OnInit {
  surahs: Array<any> = [];
  quraanService = inject(QuraanService);
  router = inject(Router);
  // pagination
  currentPage: number = 0;
  pageSize: number = 10;
  showFirstLastButtons: boolean = true;

  ngOnInit() {
    this.quraanService.getSurahs().subscribe((data: any) => {
      this.surahs = data.data;
    });
  }
  gotoItems(surah: any) {
    const surahNumber = surah ? surah.number : null;
    this.router.navigate(['/surah', surahNumber]);
  }
  // pagination
  get paginatedQuraan() {
    const startIndex = this.currentPage * this.pageSize;
    return this.surahs.slice(startIndex, startIndex + this.pageSize);
  }
  handlePage(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
  }
}
