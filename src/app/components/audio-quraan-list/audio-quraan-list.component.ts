import { Component, inject, OnInit } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-audio-quraan-list',
  standalone: true,
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './audio-quraan-list.component.html',
  styleUrl: './audio-quraan-list.component.css',
})
export class AudioQuraanListComponent implements OnInit {
  quraanService = inject(QuraanService);
  recieters: any = [];
  ngOnInit(): void {
    this.quraanService.getSurahsRecieters().subscribe((recieters: any) => {
      this.recieters = recieters.data;
      console.log(this.recieters);
    });
  }
}
