import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  imgSrc: string = 'assets/imgs/hero-quran.jpg';
}
