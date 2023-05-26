import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FeaturesModule } from './features/features.module';

platformBrowserDynamic().bootstrapModule(FeaturesModule)
  .catch(err => console.error(err));
