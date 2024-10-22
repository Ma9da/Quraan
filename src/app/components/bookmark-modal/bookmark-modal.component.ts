import { Component, Inject } from '@angular/core';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { BookMarkService } from '../../services/book-mark.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-bookmark-modal',
  standalone: true,
  templateUrl: './bookmark-modal.component.html',
  styleUrl: './bookmark-modal.component.css',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { ayah: string; surah: number; index: number }
  ) {}
  bookMarkService = inject(BookMarkService);
  addBookmark(surahNumber: number, ayahIndex: number) {
    this.bookMarkService.addBookMark(surahNumber, ayahIndex);
  }
}
