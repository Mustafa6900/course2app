import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Rota sağlayıcısını ekler
    provideRouter(routes),
    // HTTP istemcisini sağlar ve fetch API'sini kullanmasını belirtir
    provideHttpClient(withFetch())
  ]
};