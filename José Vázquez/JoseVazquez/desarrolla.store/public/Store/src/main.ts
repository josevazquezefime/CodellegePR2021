import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HeaderModule } from './components/menu-header/menuHeader.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeaderModule).catch(err => console.error(err));
