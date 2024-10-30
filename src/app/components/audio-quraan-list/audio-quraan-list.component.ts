import { Component, inject, OnInit } from '@angular/core';
import { QuraanService } from '../../services/quraan.service';
import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Observable } from 'rxjs';
import { Isurah } from '../../model/isurah';
import { IsurahsResponse } from '../../model/isurahs-response';

@Component({
  selector: 'app-audio-quraan-list',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, NgClass, AsyncPipe],
  templateUrl: './audio-quraan-list.component.html',
  styleUrl: './audio-quraan-list.component.css',
})
export class AudioQuraanListComponent implements OnInit {
  quraanService = inject(QuraanService);
  recieters!: Observable<any>;
  surahs!: Observable<IsurahsResponse>;
  ngOnInit(): void {
    this.recieters = this.quraanService.getSurahsRecieters();
    this.surahs = this.quraanService.getSurahs();
  }
  // create and save the info from the select
  // uuse them to fire this function and display the output
  getAudio(surah: string, identifier: string) {
    this.quraanService.getSurahsAudio(surah, identifier);
  }
}
