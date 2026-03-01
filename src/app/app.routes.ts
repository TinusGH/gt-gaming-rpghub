import { provideRouter, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Layout } from './core/layout/layout';
import { GameDetail } from './features/game-detail/game-detail';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'game/:id', component: GameDetail }
    ]
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
