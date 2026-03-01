import { provideRouter, Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home }
];

// Router providers for bootstrap
export const appRouterProviders = [
  provideRouter(routes)
];
