// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Inicializa o Firebase manualmente
import { initializeApp } from 'firebase/app';
import { environment as firebaseConfig } from './environments/environment';

initializeApp(firebaseConfig.firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
