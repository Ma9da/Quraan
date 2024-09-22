import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router'; // Import routing
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
}).catch((err) => console.error(err));
