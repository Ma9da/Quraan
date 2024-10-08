import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { loaderInterceptor } from './app/interceptors/loader.interceptor';
bootstrapApplication(AppComponent, {
  ...appConfig,
}).catch((err) => console.error(err));
