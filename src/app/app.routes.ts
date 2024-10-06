import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { QuraanListComponent } from './components/quraan-list/quraan-list.component';
import { SurahComponent } from './components/surah/surah.component';
import { AudioQuraanListComponent } from './components/audio-quraan-list/audio-quraan-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'surah',
    component: QuraanListComponent,
  },
  {
    path: 'surah/:number',
    component: SurahComponent,
  },
  {
    path: 'audio',
    component: AudioQuraanListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
