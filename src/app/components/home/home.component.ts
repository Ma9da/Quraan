import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { QuraanListComponent } from '../quraan-list/quraan-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, QuraanListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
