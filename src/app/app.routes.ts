import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { QuraanListComponent } from './components/quraan-list/quraan-list.component';
import { SurahComponent } from './components/surah/surah.component';
import { LoaderComponent } from './components/loader/loader.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quran',
    component: QuraanListComponent,
  },
  {
    path: 'quran/:number',
    component: SurahComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
