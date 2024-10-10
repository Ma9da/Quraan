import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookMarkService } from '../../services/book-mark.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private bookMarkService: BookMarkService) {}
  imgSrc: string = 'assets/imgs/logo.svg';
  navigateToBookMark() {
    this.bookMarkService.navigateToBookMark();
  }
}
