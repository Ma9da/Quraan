import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { BookMarkService } from '../services/book-mark.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appBookMark]',
  standalone: true,
})
export class BookMarkDirective implements OnInit {
  @Input() surahNumber!: number;
  @Input() ayahNumberInSurah!: number;

  private bookmarkInfoSubscription!: Subscription;

  constructor(
    private element: ElementRef,
    private bookmarkService: BookMarkService
  ) {}

  ngOnInit(): void {
    // Subscribe to the bookmark observable and check if this ayah is bookmarked
    this.bookmarkInfoSubscription = this.bookmarkService
      .getAyahIndexObservable()
      .subscribe((bookmarkInfo) => {
        if (
          bookmarkInfo &&
          bookmarkInfo.surahNumber === this.surahNumber &&
          bookmarkInfo.ayahIndex === this.ayahNumberInSurah
        ) {
          // Apply the highlight class if this ayah is bookmarked
          this.element.nativeElement.classList.add('aya-bookMark');
        } else {
          // Remove the highlight if it's not bookmarked
          this.element.nativeElement.classList.remove('aya-bookMark');
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.bookmarkInfoSubscription) {
      this.bookmarkInfoSubscription.unsubscribe();
    }
  }
}
