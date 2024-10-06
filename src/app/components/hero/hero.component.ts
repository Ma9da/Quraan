import { Component, inject, HostBinding } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('hoverAnimation', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HeroComponent {
  imgSrc: string = 'assets/imgs/hero-quran.jpg';
  route = inject(Router);
  isHovered: boolean = false;
  navigateToQuranText() {
    this.route.navigate(['/surah']);
  }
  navigateToQuranAudio() {
    this.route.navigate(['/audio']);
  }
  // Methods to handle hover state
  onMouseEnter() {
    this.isHovered = true;
  }
  onMouseLeave() {
    this.isHovered = false;
  }
}
